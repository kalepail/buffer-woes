// import { Buffer } from 'buffer'
import preprocess from 'svelte-preprocess'
// import adapter from '@sveltejs/adapter-cloudflare'
import adapter from '@sveltejs/adapter-cloudflare-workers'

// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// import nodePolyfills from 'rollup-plugin-polyfill-node';

// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import builtins from 'rollup-plugin-node-builtins';
import inject from '@rollup/plugin-inject'

// import stdLibBrowser from 'node-stdlib-browser'
// import plugin from 'node-stdlib-browser/helpers/esbuild/plugin'
// import stdLibBrowser from 'node-stdlib-browser'
// import shim from 'node-stdlib-browser/helpers/esbuild/shim'

// const { default: stdLibBrowser } = await import('node-stdlib-browser')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess:  preprocess(),
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
			// resolve: {
			// 	alias: stdLibBrowser
			// },
			// plugins: [
				// inject({
				// 	Buffer: ['buffer-es6', 'Buffer']
				// })
				// {
				// 	...inject({
				// 		// global: [
				// 		// 	'node-stdlib-browser/helpers/esbuild/shim',
				// 		// 	'global'
				// 		// ],
				// 		process: [
				// 			'node-stdlib-browser/helpers/esbuild/shim',
				// 			'process'
				// 		],
				// 		Buffer: [
				// 			'node-stdlib-browser/helpers/esbuild/shim',
				// 			'Buffer'
				// 		]
				// 	}),
				// 	enforce: 'post'
				// }
			// ],

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
			plugins: [
				inject({
					Buffer: ['buffer-es6', 'Buffer']
				}),
			],
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
			// optimizeDeps: {
				// exclude: ['stellar-base', 'buffer-es6'],
				// include: ['buffer', 'process'],
				// esbuildOptions: {
				// 	define: {
				// 		global: 'globalThis',
				// 	},
				// 	plugins: [
				// 		NodeGlobalsPolyfillPlugin({
				// 			process: true,
				// 			buffer: true
				// 		}),
				// 		NodeModulesPolyfillPlugin()
				// 	]
				// }
			// },
			// build: {
				// commonjsOptions: {
				// 	include: [/buffer/, /node_modules/]
				// },
        // rollupOptions: {
				// 	plugins: [
				// 		inject({
				// 			Buffer: ['buffer-es6', 'Buffer']
				// 		}),
						// builtins(),
						// nodePolyfills(),
						// nodeResolve({
						// 	browser: true,
						// 	preferBuiltins: false
						// }),
					// ],
				// },
    	// }
		}
	}
}

export default config
