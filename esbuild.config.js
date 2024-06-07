const { build } = require('esbuild');

const { cssPlugin } = require('./builders/css.plugin');
const { config, dependencies } = require('./package.json');
const tsconfig = require('./tsconfig.json');

build({
  entryPoints: [config.entry],
  bundle: true,
  minify: true,
  sourcemap: false,
  preserveSymlinks: true,
  platform: 'neutral',
  format: 'esm',
  target: 'es6',
  external: Object.keys(dependencies),
  tsconfigRaw: tsconfig,
  outfile: config.outfile,
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
}).catch(() => process.exit(1));
