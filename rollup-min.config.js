import uglify from "rollup-plugin-uglify";

export default {
    entry: 'index.js',
    dest: 'bundles/core.umd.min.tmp',
    format: 'umd',
    moduleName: 'ng.commerce',
    external: [
        '@angular/core'
    ],
    globals: {
        '@angular/core': 'ng.core'
    },
    plugins: [
        uglify()
    ]
}