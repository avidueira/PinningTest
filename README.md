# PinningTest

PinningTest is a demo app that uses [cordova-plugin-advanced-http](https://github.com/kunder-lab/cordova-plugin-advanced-http) plugin to test ssl pinning implementation and check insecure networks.

## Requirements
- Node@^4.8.0
- Ionic@1.7.16
- Cordova@6.5.0

## Configure
Currently the app is configured to make requests to `https://www.google.cl/`. TIf you want to change this, in `www/modules/testing/controllers/homeCtrl.js`, search for:
```javascript
cordova.plugin.http.sendRequest('https://www.google.cl/', options, function (response) {
```

And change `https://www.google.cl/` to your server's domain.

Note: Remember to add your server's ssl certificate to `www/certificates/`

## Run
```
npm install
ionic state restore
cordova platform rm <platform>
cordova build <platform>
cordova run <platform>
```