import pkg from './package.json' assert { type: 'json' }
import rpi_resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'code/rpi-jsy.mjs',
	output: [
		{file: pkg.module, format: 'es'},
		{file: pkg.main, format: 'cjs', exports: "default"}],
  plugins: [ rpi_resolve() ],
  external: ['path', 'util'],
}

