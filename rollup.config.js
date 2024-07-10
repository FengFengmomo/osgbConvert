import strip from '@rollup/plugin-strip';
import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: 'src/index.js',
		
		external: ['three'],
		plugins: [
			strip({
				functions: ['assert.*', 'debug', 'alert', 'console.*']
			}),
			typescript({
				tsconfig: './tsconfig.json'
			}),
			commonjs({
				include: /node_modules/
			}),
			
			nodePolyfills({
				include: ['buffer']
			}),
			resolve({
			    browser: true,
				jsnext: true,
				main: true,
				preferBuiltins: false
			})
		],
		output: [
			{
				format: 'es',
				file: 'build/osgbConvertThree.module.js',
				indent: '\t'
			},
			{
				format: 'cjs',
				name: 'OsgConvert',
				file: 'build/osgbConvertThree.cjs',
				indent: '\t'
			},
			{
				globals: {three: 'THREE'},
				format: 'umd',
				name: 'OsgConvert',
				file: 'build/osgbConvertThree.js',
				indent: '\t'
			}
		]
	}
];
