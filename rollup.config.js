import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import { minifyHTML } from 'rollup-plugin-minify-html';
import scss from "rollup-plugin-scss";
import imagemin from "rollup-plugin-imagemin";

export default [{
    input: './domain/index.ts',
    output: {
      file: './dist/js/index.min.js',      
      plugins: [terser()],      
      sourcemap: true,
      format: 'iife',
    },
    plugins: [      
        scss({
          output: './dist/styles.css',
          outputStyle: 'compressed',
        }),
        imagemin({
          include: ['./assets/**/*.{svg,png,jpg}'],
          publicPath: './dist/assets'
        }),
        minifyHTML({
          targets: [
            { 
              src: './index.html',
              dest: './dist/index.html'
            },
            { 
              src: './docs/index.html',
              dest: './dist/docs/index.html'
            },
            { 
              src: './docs/components/index.html',
              dest: './dist/docs/components/index.html'
            }
          ],
          minifierOptions: {
            collapseWhitespace: true,
            minifyJS: true,
          }
        }),
        typescript(),
      ],
  }, {
    input: './domain/code-copy.ts',
    output: {
      file: './dist/js/code-copy.min.js',      
      plugins: [terser()],      
      sourcemap: true,
      format: 'iife',
    },
    plugins: [
      typescript()
    ]
  }]