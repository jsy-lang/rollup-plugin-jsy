import rpi_jsy from './rpi-jsy.mjs'

export default {
	input: 'node_modules/@jsy-lang/jsy/code/scanner/inject_dedent.jsy',
	output: {format: 'es', sourcemap: 'inline'},
  plugins: [ rpi_jsy({exclude: []}) ]
}

