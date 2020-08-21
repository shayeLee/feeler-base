import * as path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
const extensions = [".js", ".ts"];

export default (libraryName) => ({
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: `esm/${libraryName}.js`,
      format: 'esm',
      name: 'baseBom'
    },
    {
      file: `lib/${libraryName}.js`,
      format: 'cjs',
      name: 'baseBom'
    },
    {
      file: `umd/${libraryName}.js`,
      format: 'umd',
      name: 'baseBom'
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
    include: path.resolve(__dirname, 'src/**'),
    exclude: path.resolve(__dirname, 'node_modules/**')
  }
})