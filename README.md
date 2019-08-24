# rn-chatApp
- Pusherkit API
- React-Native
- Node.js

# Start Server
To start server: 
```
Nodemon Server.js
```

# Start Client
To Start client:
```
npm start
```

# Local Tunnel
To start local tunnel:
```
lt --port 8000
```
# Setting up REST Api address 
If running local node server + Genymotion emulation, add this to the axios.post in App.js:
```
http://10.0.3.2:3001/users
```
If using Local Tunnel, apply given URL + "/users"

# Generating APK
1. Assemble Release 
```
react-native bundle --dev false  --platform android --entry-file index.js --bundle-output android/app/src/main/assets/index.bundle --assets-dest android/app/src/main/res
```
2. Delete drawable-*
Remove all generated drawable-* directories. Our current build cannot handle the newer generated assets types. If you skip this step, you will error at `Execution failed for task ':app:processReleaseResources’.`
```
rm -rf android/app/src/main/res/drawable-*
```
3. Clean & Assemble Release
```
cd android/ && ./gradlew clean && ./gradlew assembleRelease
```
4. Locate APK:
The APK should be found in
```android/app/build/outputs/apk/debug/app-degub.apk```
or find it with 
```find . | grep -i apk```
