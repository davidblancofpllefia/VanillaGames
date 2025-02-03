import path from 'path';

export default {
  root: '.', // La raíz es el directorio actual (donde está index.html)
  base: './',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Entrada correcta
      },
      output: {
        dir: path.resolve(__dirname, 'dist'),
        format: 'es',
      },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false,
  },
  publicDir: 'assets',
  server: {
    hot: true
  }
};
