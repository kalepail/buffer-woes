import { Buffer } from 'buffer'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import preprocess from 'svelte-preprocess'
// import adapter from '@sveltejs/adapter-cloudflare'
import adapter from '@sveltejs/adapter-cloudflare-workers'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// import nodeResolve from '@rollup/plugin-node-resolve'
// import nodePolyfills from 'rollup-plugin-polyfill-node'
import nodePolyfills from 'rollup-plugin-polyfill-node'

import { nodeResolve } from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import inject from '@rollup/plugin-inject'

// import stdLibBrowser from 'node-stdlib-browser'

// import plugin from 'node-stdlib-browser/helpers/esbuild/plugin'
// import stdLibBrowser from 'node-stdlib-browser'
// import shim from 'node-stdlib-browser/helpers/esbuild/shim'

/** @type {import('@sveltejs/kit').Config} */
const { default: stdLibBrowser } = await import('node-stdlib-browser')

const config = {
	preprocess:  preprocess({
    // babel: {
		// 	plugins: [
		// 		'lodash',
		// 		'@babel/plugin-proposal-optional-chaining'
		// 	],
    //   presets: [
    //     [
    //       '@babel/preset-env',
    //       {
    //         loose: true,
    //         // No need for babel to resolve modules
    //         modules: false,
    //         targets: {
    //           // ! Very important. Target es6+
    //           esmodules: true,
    //         },
    //       },
    //     ],
    //   ],
    // },
  }),
	kit: {
		adapter: adapter(),
		methodOverride: {
			parameter: '_method',
			allowed: ['PUT', 'PATCH', 'DELETE']
		},
		vite: {
			// optimizeDeps: {
			// 	inject: [
			// 		'./esbuild.inject.js'
			// 	],
			// 	define: {
			// 		global: 'global',
			// 		process: 'process',
			// 		Buffer: 'Buffer'
			// 	},
			// 	// plugins: [plugin(stdLibBrowser)]
			// }
			resolve: {
				alias: stdLibBrowser
			},
			optimizeDeps: {
				include: ['buffer', 'process'],
				esbuildOptions: {
					define: {
						global: 'globalThis',
					}
				}
			},
			plugins: [
				{
					...inject({
						// global: [
						// 	'node-stdlib-browser/helpers/esbuild/shim',
						// 	'global'
						// ],
						process: [
							'node-stdlib-browser/helpers/esbuild/shim',
							'process'
						],
						Buffer: [
							'node-stdlib-browser/helpers/esbuild/shim',
							'Buffer'
						]
					}),
					enforce: 'post'
				}
			]

			// resolve: {
			// 	alias: stdLibBrowser
			// },
			// optimizeDeps: {
			// 	include: ['buffer', 'process']
			// },
			// plugins: [
			// 	{
			// 		...inject({
			// 			global: [
			// 				require.resolve(
			// 					'node-stdlib-browser/helpers/esbuild/shim'
			// 				),
			// 				'global'
			// 			],
			// 			process: [
			// 				require.resolve(
			// 					'node-stdlib-browser/helpers/esbuild/shim'
			// 				),
			// 				'process'
			// 			],
			// 			Buffer: [
			// 				require.resolve(
			// 					'node-stdlib-browser/helpers/esbuild/shim'
			// 				),
			// 				'Buffer'
			// 			]
			// 		}),
			// 		enforce: 'post'
			// 	}
			// ],
			// inject: ['./src/lib/buffer.js'],
			// define: {
			// 	Test: 'Test'
			// },
			// plugins: [
				// inject({
				// 	Buffer: ['buffer', 'Buffer']
				// 	// Buffer: 'buffer'
				// }),
				// nodePolyfills(),
			// ],
			// resolve: {
			// 	alias: {
					// Buffer: ['buffer', 'Buffer'],
			// 		util: 'util'
			// 	}
			// },
			// ssr: {
			// 	external: false
			// },
			// 	optimizeDeps: {
			// 		// include: ['stellar-base'],
			// 		// include: ['buffer-es6'],
			// // 		// exclude: ['https'],
			// 		esbuildOptions: {
			// 			// platform: 'node',
			// // 			// external: ['https'],
			// 			// inject: ['./src/lib/buffer.js'],
			// 			define: {
			// 				// Buffer: false, 
			// 				// global: 'globalThis',
			// 			},
			// 			plugins: [
			// 				// NodeGlobalsPolyfillPlugin({
			// 				// 	process: true,
			// 					// buffer: true
			// 				// }),
			// 				// NodeModulesPolyfillPlugin()
			// 			]
			// 		}
			// 	},
			// build: {
			// 	// commonjsOptions: {
			// 	// 	include: [/buffer/, /node_modules/]
			// 	// },
			// 	// minify: false,
      //   rollupOptions: {
			// 		plugins: [
			// 			// commonjs(),
			// 			// babel({ 
			// 			// 	babelHelpers: 'bundled' 
			// 			// }),
			// 			// builtins(),
			// 			// nodeResolve({
			// 			// 	browser: true,
			// 			// 	preferBuiltins: true
			// 			// }),
			// 			// inject({
			// 			// 	Buffer: ['buffer', 'Buffer'] // ['buffer-es6', 'Buffer'] // ['buffer', 'Buffer']
			// 			// }),
			// 			// globals(),
			// 		]
			// 	}
    	// }
		}
	}
}

export default config
