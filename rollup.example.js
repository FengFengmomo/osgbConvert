import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: 'src/index.js',
			plugins: [
					resolve({
						browser: true,
						preferBuiltins: false, //如果你的包中使用了一些内置模块（如fs、path），插件默认会优先使用这些内置模块。 如果你想使用本地安装的同名模块，可以将preferBuiltins选项设置为false。
					}),
					typescript({
							tsconfig: './tsconfig.examples.json',
					})
			],
			output: [
					{
						format: 'iife',
						file: 'examples/js/3dtiles.js',
						indent: '\t'
					}
		]
	}
];
