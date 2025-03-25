import { ReactNode, useCallback, useEffect, useRef } from 'react';

import * as d3 from 'd3';
import { TreeLayout } from 'd3';
import { createRoot } from 'react-dom/client';

import { MKPill } from 'core/MKPill';

import { MKOrgChartNodeItemStyled, MKOrgChartStyled } from './style';

export interface MKOrgChartNodeProps {
  name: string;
  title: string;
  id: number;
  children?: MKOrgChartNodeProps[] | null;
  _children?: MKOrgChartNodeProps[] | null;
}

export interface MKOrgChartNodeRenderProps<D> {
  data: D;
  draw: () => void;
  editable: boolean;
}

export interface MKOrgChartProps<D> {
  data: D[];
  height?: number;
  width?: number;
  render?: (props: MKOrgChartNodeRenderProps<D>) => ReactNode;
  nodeWidth?: number;
  nodeHeight?: number;
  editable?: boolean;
}

export const MKOrgChart = <D extends MKOrgChartNodeProps = any>({
  data,
  height = 1000,
  width = 2000,
  render,
  nodeWidth = 200,
  nodeHeight = 170,
  editable = false,
}: MKOrgChartProps<D>) => {
  const divRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  // Save the zoom behavior so we can call its transform later
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown>>(null);
  const treeRef = useRef<TreeLayout<D>>(null);

  const drawChart = useCallback(() => {
    if (!svgRef.current) {
      return;
    }

    // Get svg container dimensions
    const svgWidth = svgRef.current.clientWidth;
    const svgHeight = svgRef.current.clientHeight;

    // Clear previous svg content (if any)
    d3.select(svgRef.current).selectAll('*').remove();

    // Create the SVG element and container group that will be zoomed and panned
    const svg = d3.select(svgRef.current);
    const container = svg.append('g');

    // Define the vertical link generator
    const vertical = d3
      .linkVertical()
      .x((d: any) => d[0])
      .y((d: any) => d[1]);

    // Setup zoom behavior and store it in zoomRef
    zoomRef.current = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 10])
      .on('zoom', (event) => {
        container.attr('transform', event.transform);
      });

    // Apply zoom behavior to the SVG
    svg.call(zoomRef.current);

    // Convert the data into a hierarchy format expected by D3
    const hierarchy = d3.hierarchy(data[0]);

    // Create tree layout and assign size based on provided width & height
    treeRef.current = d3.tree<D>().size([width, height]);

    treeRef.current(hierarchy);

    // Function to center an active node in the SVG view
    const centerActiveNode = (activeNode: d3.HierarchyNode<D>) => {
      if (!svgRef.current || !zoomRef.current) {
        return;
      }

      // Calculate offsets for centering the active node
      const translateX = svgWidth / 2 - (activeNode.x ?? 0);
      const translateY = svgHeight / 2 - (activeNode.y ?? 0);

      // Transition to the new transform
      svg.transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity.translate(translateX, translateY));
    };

    // Draw links (edges) between nodes using vertical link generator
    container
      .selectAll('path.link')
      .data(hierarchy.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('d', (d: any) =>
        vertical({
          source: [d.source.x ?? 0, d.source.y ?? 0],
          target: [d.target.x ?? 0, d.target.y ?? 0],
        }),
      );

    // Draw nodes and attach event listeners for centering on click
    const nodes = container
      .selectAll('g.node')
      .data(hierarchy.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${d.x},${d.y})`)
      .on('click', (_, d) => {
        centerActiveNode(d);
      });

    if (editable) {
      // Apply the drag behavior to each node
      nodes.call(
        d3
          .drag<SVGGElement, d3.HierarchyNode<D>>()
          .on('start', function (event, d) {
            d.x = event.x;
            d.y = event.y;
            d3.select(this).raise().attr('stroke', 'black');
          })
          .on('drag', function (event, d) {
            d.x = event.x;
            d.y = event.y;
            d3.select(this).attr('transform', `translate(${d.x},${d.y})`);
          })
          .on('end', function (e, d) {
            console.log(e, d);
            d3.select(this).classed('active', false);
          }),
      );
    }

    // Append a rect for visualization (or border)
    nodes
      .append('rect')
      .attr('class', 'node-border')
      .attr('width', nodeWidth)
      .attr('height', nodeHeight)
      .attr('x', -nodeWidth / 2)
      .attr('y', -nodeHeight / 2)
      .attr('fill', 'none')
      .attr('stroke', 'gray');

    // Append the foreignObject and render your React component inside it
    nodes.each((d, index, list) => {
      const group = d3.select(list[index]);

      // Create the foreignObject with initial width/height
      const fo = group
        .append('foreignObject')
        .attr('x', -nodeWidth / 2)
        .attr('y', -nodeHeight / 2)
        .attr('width', nodeWidth)
        .attr('height', nodeHeight)
        .node();

      if (fo) {
        // Render React content into current foreignObject
        const root = createRoot(fo);
        root.render(
          <MKOrgChartNodeItemStyled className="mk-org-chart__node">
            {render?.({
              data: d.data,
              draw: drawChart,
              editable,
            }) ?? <MKPill loading height={nodeHeight} width={nodeWidth} shape="circle" />}
          </MKOrgChartNodeItemStyled>,
        );

        // After the content is rendered, adjust the rect size.
        // Use requestAnimationFrame to give the browser time to render.
        requestAnimationFrame(() => {
          // Assume the rendered React content is the first child of the foreignObject
          const contentEl = fo.firstElementChild;
          if (contentEl) {
            // Measure the content's bounding box. If using HTML elements inside a foreignObject,
            // you might use getBoundingClientRect.
            const rect = contentEl.getBoundingClientRect();

            const contentWidth = rect.width;
            const contentHeight = rect.height;
            // Update the foreignObject dimensions
            d3.select(fo)
              .attr('width', contentWidth)
              .attr('height', contentHeight)
              .attr('x', -contentWidth / 2)
              .attr('y', -contentHeight / 2);

            // Update the surrounding rectangle to match the new dimensions
            group
              .select('rect.node-border')
              .attr('width', contentWidth)
              .attr('height', contentHeight)
              .attr('x', -contentWidth / 2)
              .attr('y', -contentHeight / 2);
          }
        });
      }
    });
  }, [data, editable, height, nodeHeight, nodeWidth, render, width]);

  // Redraw the chart on changes to data or dimensions
  useEffect(() => {
    drawChart();
  }, [drawChart]);

  return (
    <MKOrgChartStyled className="mk-org-chart" ref={divRef}>
      <svg width="100%" height="100%" ref={svgRef} />
    </MKOrgChartStyled>
  );
};
