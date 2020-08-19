import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
const extensions = [".js", ".ts"];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'esm/base-bom.js',
      format: 'esm',
      name: 'baseBom',
      /* globals: {
        'vue': 'Vue'
      } */
    },
    {
      file: 'lib/base-bom.js',
      format: 'cjs',
      name: 'baseBom',
      /* globals: {
        'vue': 'Vue'
      } */
    },
    {
      file: 'umd/base-bom.js',
      format: 'umd',
      name: 'baseBom',
      /* globals: {
        'vue': 'Vue'
      } */
    }
  ],
  plugins: [
    json(),
    typescript(),
    nodeResolve({
      extensions
    }),
    commonjs({
      extensions,
      ignoreGlobal: false
    })
  ],
  external: [],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}