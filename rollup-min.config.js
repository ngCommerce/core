
export default {
    entry: 'index.js',
    dest: 'bundles/core.umd.min.tmp',
    format: 'umd',
    moduleName: 'ng.commerce',
    external: [
        '@angular/core',
        '@angular/http',
        'rxjs/add/operator/toPromise',
        'rxjs/add/operator/map'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/http': 'ng.http'
    }
}