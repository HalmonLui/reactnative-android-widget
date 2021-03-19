# React Native Android Widget
Trial/proof of concept to create a working Android widget connection with expo
Once working, will integrate with socket.io for real-time events between devices

# How it works
A native android widget communicates with React Native's NativeModules package.
We created a native android class `SharedStorage` which allows for communication between our RN app and the widget.

# Screenshots
![Demo Application](https://github.com/HalmonLui/reactnative-android-widget/readme/app_screenshot.jpg "Demo Application")
![Demo Widget](https://github.com/HalmonLui/reactnative-android-widget/readme/widget_screenshot.jpg "Demo Widget")

# How to Run
Requirements:
- React Native
- Node.js
- Android Studio
Follow the React Native environment setup guide: https://reactnative.dev/docs/environment-setup

1. Clone the repo https://github.com/HalmonLui/reactnative-android-widget.git
2. cd reactnative-android-widget
3. In one terminal run `npx react-native start`
4. In another terminal, run `npx react-native run-android`
