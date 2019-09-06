# React-Native Chat App
- Pusherkit API
- React-Native
- Node.js
- Express

## Start Server
To start server: 
```
nodemon server.js
```

## Start Client
To Start client:
```
npm start
```

## Local Tunnel
To start local tunnel with custom port and subdomain:
```
lt --port 3001 --subdomain tidy-rabbit-91
```
## Setting up REST Api address 
If running local node server + Genymotion emulation, add this to the axios.post in App.js & Chatscreen.js:
```
http://10.0.3.2:3001/users
```
If using Local Tunnel, apply given URL + "/users"

## Generating APK
Follow official React-Natie Docs here: 
https://facebook.github.io/react-native/docs/signed-apk-android

## Side Loading
Make sure to uninstall previous versions of the app before attempting apk sideload/install
