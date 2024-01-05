# `bonjour-service` publish bug replication repository

Connected to issue https://github.com/onlxltd/bonjour-service/issues/46.

## `bonjour-service` library

- `npm run server` should publish a `bonjour-service` service with the `type: 'test', protocol: 'tcp' port: 3000`. It is not detectable outside of the application unless using `bonjour-service` as a client as well.
- `npm run client` should detect the service and log it to the console.

## `mdns` library

- `npm run mdns-server` similar to `npm run start` but using other library
- `npm run mdns-client` similar to `npm run client` but using other library

## Other means of verification

Using the app `Discovery.app` from the app store on macOS, the service run by `npm run start` is not detected. Neither is it detected with `react-native-zeroconf`. The service run by `npm run mdns` is detected by both `Discovery.app` and a correctly configured React native app with `react-native-zeroconf`.
