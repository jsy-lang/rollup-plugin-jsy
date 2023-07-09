const rpi_jsy = require('./rpi-jsy.cjs')

module.exports = {
	input: 'node_modules/@jsy-lang/jsy/code/scanner/inject_dedent.jsy',
	output: {format: 'es', sourcemap: 'inline'},
  plugins: [ rpi_jsy({exclude: []}) ]
}

