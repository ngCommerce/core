export default {
    entry     : 'index.js',
    dest      : 'bundles/core.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core',
        '@angular/http',
        'rxjs/add/operator/toPromise',
        'rxjs/add/operator/map',
        'ionic-angular/util/util'
    ],
    globals   : {
        '@angular/core': 'ng.core',
        '@angular/http': 'ng.http',
        'ionic-angular/util/util' : 'ng.util'
    },
    moduleName: 'ng.commerce'
}