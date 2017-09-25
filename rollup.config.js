export default {
    entry     : 'index.js',
    dest      : 'bundles/core.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core',
        '@angular/http',
        'rxjs/add/operator/toPromise',
        'rxjs/add/operator/map'
    ],
    globals   : {
        '@angular/core': 'ng.core',
        '@angular/http': 'ng.http'
    },
    moduleName: 'ng.commerce'
}