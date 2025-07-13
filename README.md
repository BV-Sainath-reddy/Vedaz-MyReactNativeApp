
Vedaz-MyReactNativeApp is a mobile application built using **React Native**, specifically developed for the Android platform. It includes support for Firebase Cloud Messaging (FCM) to receive push notifications on Android devices.

---

 Features

- Android-only React Native mobile app
- Push Notifications via Firebase Cloud Messaging (FCM)
- Modular and scalable structure
- Supports both emulator and physical device testing

---

 Tech Stack

- React Native (Android)
- Firebase for FCM integration
- JavaScript (ES6+)
- Android Studio & ADB

---

 Installation & Setup (Android)

1. Clone the project
```bash
git clone https://github.com/BV-Sainath-reddy/Vedaz-MyReactNativeApp.git
cd Vedaz-MyReactNativeApp
````

2. Install dependencies

```bash
npm install
```

3. Start Metro bundler

```bash
npx react-native start
```

4. Run on Android device or emulator

```bash
npx react-native run-android
```

 Ensure your emulator is running or your physical device is connected via USB with USB debugging enabled.

---

Firebase Setup (FCM)

1. Add your `google-services.json` file inside `android/app/`.
2. Ensure your Firebase project is configured for Android.
3. Firebase should be initialized and the app must request notification permissions (Android 13+).

---

Testing Notifications

* Run the app on an emulator or physical device.
* Retrieve the FCM token from logcat or app log.
* Use Firebase Console or your backend to send test notifications to that token.

---

Author

**B V Sainath Reddy**
GitHub: [@BV-Sainath-reddy](https://github.com/BV-Sainath-reddy)

---


