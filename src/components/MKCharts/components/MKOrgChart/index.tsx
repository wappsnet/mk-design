import { ReactNode, useCallback, useEffect, useRef } from 'react';

import { clsx } from 'clsx';
import * as d3 from 'd3';
import { createRoot } from 'react-dom/client';

import { MKPill } from 'core/MKPill';

import { MKOrgChartStyled } from './style';

export interface MKOrgChartNodeProps {
  name: string;
  title: string;
  id: number;
  children?: MKOrgChartNodeProps[];
}

export interface MKOrgChartProps<D> {
  data: D[];
  height?: number;
  render?: (props: { data: D }) => ReactNode;
  zoom?: boolean;
}

export const MKOrgChart = <D extends MKOrgChartNodeProps = any>({
  data,
  height = 600,
  render,
  zoom = true,
}: MKOrgChartProps<D>) => {
  const divRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const drawChart = useCallback(() => {
    if (!svgRef.current) {
      return;
    }

    const svgWidth = svgRef.current.clientWidth;
    const svgHeight = svgRef.current.clientHeight;

    // Clear previous svg content (if any)
    d3.select(svgRef.current).selectAll('*').remove();

    // Create the SVG element and container group that will be zoomed and panned
    const svg = d3.select(svgRef.current).attr('width', svgWidth).attr('height', svgHeight);

    // Create container group which will hold the chart elements
    const container = svg.append('g');

    const vertical = d3
      .linkVertical()
      .x((d) => d[0])
      .y((d) => d[1]);

    if (zoom) {
      // Define zoom behavior over the SVG element
      const zoomBehavior = d3
        .zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.5, 2]) // adjust as necessary
        .on('zoom', (event) => {
          console.info(event.transform);
          container.attr('transform', event.transform);
        });

      // Apply zoom behavior to the SVG
      svg.call(zoomBehavior);
    }

    // Convert the data into a hierarchy format expected by D3
    const root = d3.hierarchy(data[0]);

    // Create a tree layout with size adjusted for vertical orientation
    const treeLayout = d3.tree<D>().size([svgWidth, svgHeight]);
    treeLayout(root);

    // Draw links (edges) between nodes using vertical link generator
    container
      .selectAll('path.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('d', (d) =>
        vertical({ source: [d.source.x ?? 0, d.source.y ?? 0], target: [d.target.x ?? 0, d.target.y ?? 0] }),
      );

    // Draw nodes as circles, with text labels
    const nodes = container
      .selectAll('g.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    // Draw the circle
    nodes.append('circle').attr('r', 40).attr('fill', '#fff').attr('stroke', 'steelblue').attr('stroke-width', 3);

    // Append the foreignObject and render your React component inside it
    nodes.each((d, index, list) => {
      const fo = d3
        .select(list[index])
        .append('foreignObject')
        .attr('x', -40)
        .attr('y', -40)
        .attr('width', 80)
        .attr('height', 80)
        .node();

      if (fo) {
        // Create a container DIV
        const containerDiv = document.createElement('div');
        // Apply styles to center content inside the circle
        containerDiv.style.display = 'flex';
        containerDiv.style.alignItems = 'center';
        containerDiv.style.justifyContent = 'center';
        containerDiv.style.height = '100%';

        // Mount the React component into containerDiv.
        // You can pass any props you need (here we pass the node's data).
        const root = createRoot(containerDiv);
        if (render) {
          root.render(render?.({ data: d.data }));
        } else {
          root.render(<MKPill loading height={80} width={80} shape="circle" />);
        }
        // Append the containerDiv into the foreignObject
        fo.appendChild(containerDiv);
      }
    });
  }, [data, render]);

  useEffect(() => {
    const observer = new ResizeObserver(drawChart);

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [drawChart]);

  return (
    <MKOrgChartStyled ref={divRef} className={clsx('mk-org-chart')}>
      <svg width="100%" height={height} ref={svgRef} />
    </MKOrgChartStyled>
  );
};
