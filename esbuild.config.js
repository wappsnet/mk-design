const { dependencies, config } = require('./package.json');
const { cssPlugin } = require('./builders/css.plugin');
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: [config.entry],
    bundle: true,
    minify: true,
    splitting: true,
    sourcemap: true,
    preserveSymlinks: true,
    platform: 'neutral',
    format: 'esm',
    target: 'esnext',
    tsconfig: 'tsconfig.json',
    external: Object.keys(dependencies),
    outdir: config.outdir,
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx',
      '.png': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.svg': 'file',
      '.gif': 'file',
      '.scss': 'css',
    },
    assetNames: '[dir]/[name]',
    sourceRoot: 'src',
    plugins: [
      cssPlugin({
        loadPaths: [config.root],
        rootDir: config.root,
        outDir: config.outdir,
      }),
    ],
  })
  .catch(() => process.exit(1));
