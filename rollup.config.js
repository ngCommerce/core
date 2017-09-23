export default {
    entry     : 'index.js',
    dest      : 'bundles/core.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core'
    ],
    globals   : {
        '@angular/core': 'ng.core',
    },
    moduleName: 'ng.commerce'
}