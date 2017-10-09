export default {
    entry     : 'index.js',
    dest      : 'bundles/core.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core',
        '@angular/http',
        'rxjs/add/operator/toPromise',
        'rxjs/add/operator/map',
        'ionic-angular/util/util',
        '@ionic-native/base64',
        '@ionic-native/image-picker'
    ],
    globals   : {
        '@angular/core': 'ng.core',
        '@angular/http': 'ng.http',
        'ionic-angular/util/util' : 'ng.util',
        '@ionic-native/base64':'ng.base64',
        '@ionic-native/image-picker':'ng.image-picker'
    },
    moduleName: 'ng.commerce'
}