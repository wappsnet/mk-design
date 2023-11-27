const cssPlugin = ({ loadPaths, rootDir, outDir }) => ({
  name: 'css',
  setup: (build) => {
    const sass = require('sass');

    build.onResolve({ filter: /\.scss$/ }, (args) => {
      const fs = require('fs');
      const path = require('path');

      const sourceDir = args.resolveDir;
      const distDir = args.resolveDir.replace(rootDir, outDir);

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
        loadPaths,
      });

      return {
        contents: result.css.toString(),
        loader: 'css',
      };
    });
  },
});

module.exports = {
  cssPlugin,
};
