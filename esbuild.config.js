const packages = require('./package.json');
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: false,
    splitting: true,
    sourcemap: true,
    platform: 'neutral',
    format: 'esm',
    target: 'esnext',
    tsconfig: 'tsconfig.json',
    external: Object.keys(packages.dependencies),
    outdir: 'dist',
    loader: {
      '.png': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.svg': 'file',
      '.gif': 'file',
      '.scss': 'css',
    },
    assetNames: '[dir]/[name]',
    plugins: [
      {
        name: 'css',
        setup(build) {
          const path = require('path');
          const sass = require('sass');

          build.onResolve({ filter: /\.scss$/ }, (args) => {
            const fs = require('fs');
            const path = require('path');

            const sourceDir = args.resolveDir;
            const distDir = args.resolveDir.replace('src', 'dist'); // Change to your output directory

            const sourceFilePath = path.join(sourceDir, args.path);
            const distFilePath = path.join(distDir, args.path);

            try {
              if (fs.statSync(sourceFilePath).isFile()) {
                fs.cpSync(sourceFilePath, distFilePath);
              }

              console.log('SCSS files copied successfully.');
            } catch (err) {
              console.error('Error copying SCSS files:', err);
            }

            return {
              path: path.join(args.resolveDir, args.path),
            };
          });

          build.onLoad({ filter: /\.scss$/ }, (args) => {
            const result = sass.compile(args.path, {
              loadPaths: [path.resolve(__dirname, 'src')],
            });

            return {
              contents: result.css.toString(),
              loader: 'css',
            };
          });
        },
      },
    ],
  })
  .catch(() => process.exit(1));
