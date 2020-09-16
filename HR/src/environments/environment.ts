// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SERVER_URL: './',
  BASE_API_URL: 'https://localhost:5001/',
  GOV_API_URL: 'https://localhost:5001/',
  APPLICATION_ID: '532D496F-5400-0000-0000-000000000000', // This is IoT application id.
  CAPTCHA_SITE_KEY: '6LfeH8wZAAAAAIC8iAVJQuSChimdOgm9e8tnth04', //This is site key for testing purposes.
  API_VERSION: '1',
  APP_VERSION: '2.7.1',
  production: false,
  useHash: true,
  hmr: false,
  pro: {
    theme: 'compact',
    menu: 'side',
    contentWidth: 'fluid',
    fixedHeader: true,
    autoHideHeader: true,
    fixSiderbar: true,
    onlyIcon: false,
    colorWeak: false,
  },
  BASE_API_URI: {
    AUTHENTICATION_API: 'http://210.211.101.84:2241/',
    FILENET_API: 'http://210.211.101.84:2264/',
    FILE_SERVICE_API: 'http://210.211.101.84:2245/',
    METADATA_SERVICE_API: 'http://210.211.101.84:2246/',
    IOT_INGEST_SERVICE_API: 'http://210.211.101.84:2265/',
    DICTIONARY_SERVICE_API: 'http://dev.dictionary.s-erp.vn/',
    FTP_SERVICE_API: 'http://localhost:2048/',
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
