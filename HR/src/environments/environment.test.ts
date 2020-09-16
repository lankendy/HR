// ng build --configuration="test"
export const environment = {
  SERVER_URL: './',
  BASE_API_URL: 'http://10.0.101.141:8200/',
  API_VERSION: '1',
  APP_VERSION: '0.1.0',
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
};
