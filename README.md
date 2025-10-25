## 📊 React Native WebView Benchmark

#### This repo benchmarks load time performance of [react-native-webview](https://github.com/react-native-webview/react-native-webview) across webview versions 13.13.5 and 13.14.1.

## Why this Benchmark?
WebView is widely used in React Native apps to render web content, but its performance can vary across versions and platforms. Understanding these differences helps developers make informed upgrade decisions.

## Benchmarking Metrics 📊
- **Load Time**: Load time measured from marker_start on button press to marker_end on WebView load finish.

  <img src="./assets/diagram.png" alt="App Demo" width="400" />

- App Demo 

  <img src="./assets/app.gif" alt="App Demo" width="300" />

## Summary of Results
- Android average load time: ~233 ms
- iOS average load time: ~116 ms


## About the Benchmarking Process 📝

We are using the [**Marco**](https://marco.dreamsportslabs.com/) tool to mark events and CLI tools provided by Marco to visualize the results.

<details>
<summary>📱 Device Details</summary>

These benchmarks were conducted on:

### 🤖 Android (Real Device)
- **Device:** Realme C35 (Low-end)
- **OS:** Android 13
- **RAM:** 4 GB

### 🍏 iOS (Simulator)
- **Device:** iPhone 16 Pro
- **OS Version:** iOS 18.3

</details>

## Load Time ⌛

1. **Capture the Initial Event:**
    - The event is triggered when a button is clicked on app.tsx. ([refer](https://github.com/ds-horizon/rn-webview-benchmark/blob/main/apps/webview_v_13_13_5/App.tsx))
    - The `timestamp` is extracted from the `Button.onPress` event object.
    - The `timestamp` and a marker name are passed to the native module `PerformanceTracker.track()` to log the start time.

2. **Track webview rendering:**
    - The load time completes when the initial webview content is fully painted and visible.
    - We wrapped the **webview** with the [**PerformanceTracker**](https://marco.dreamsportslabs.com/api/tracking-screen/) API from the **Marco** library.
    - This accurately captures the **onDraw** event, indicating when the screen is fully rendered.
    - Code [reference](https://github.com/ds-horizon/rn-webview-benchmark/blob/main/apps/webview_v_13_13_5/src/WebComponent.tsx)


## Results
### WebView Load Time Comparison
| Platform | Device Type | v 13.13.5    | v 13.14.1    |
| -------- | ----------- |--------------|--------------|
| Android  | Real Device | **145.4 ms** | **154.1 ms** |
| Android  | Emulator    | **241.5 ms** | **242.7 ms** |
| iOS      | Simulator   | **122.0 ms** | **109.5 ms** |

🔗 **Live Benchmark Results:** [Click here](https://ds-horizon.github.io/rn-webview-benchmark/)


### Marco reports for Vivo

<img src="./assets/benchmarks/android/android_real_device_mean.png" alt="web_view_load_time" width="600"/>

<img src="./assets/benchmarks/android/android_real_device_iteration.png" width="600"/>

<details ><summary>Click to android emulator Reports</summary>
<img src="./assets/benchmarks/android/android_emulator.png" width="600"/>
</details>

<details ><summary>click to view ios simulator reports</summary>
<img src="./assets/benchmarks/ios/ios_simulator.png"width="600"/>
</details>
## 📁 Project Structure

```
rn-webview-benchmark/
├── apps/                      # Individual RN apps per version
│   ├── webview_v_13_13_5/
│   └── webview_v_13_14_1/
├── marco-results/             # Collected benchmark outputs
│   ├── webview_v_13_13_5/
│   └── webview_v_13_14_1/
├── marco.config.js            # Marco config
├── package.json               # Dependencies (optional)
├── README.md
```

---

<details>
<summary>Setup Instructions </summary>

### Prerequisites

1. [React Native Environment Setup](https://reactnative.dev/docs/next/environment-setup)
2. [Maestro Setup](https://maestro.mobile.dev/)
    - To check if Maestro is installed on your system, run command:
   ```sh
   maestro --version
   ```
   
### 1. Clone & Install

```
git clone https://github.com/ds-horizon/rn-webview-benchmark
cd rn-webview-benchmark
yarn install
```
---

## 📦 Install Dependencies Per App

Each app is a standalone React Native app. Run the following for each:

```
cd apps/webview_v_13_13_5
yarn install
cd ios
pod install
cd ../..
```

Repeat for other app folders.

---

## 🚀 Run the App

### iOS

```
cd apps/webview_v_13_13_5
yarn ios
```

### Android

```
yarn android
```

---

## 🧪 Run Benchmark Test

Each app has its own test`maestro/AndroidScript/webview_test.yml`.

```
cd apps/webview_v_13_13_5
maestro test maestro/AndroidScript/webview_test.yml  # for Android
maestro test maestro/AndroidScript/webview_test.yml  # for iOS

```

---

## 📈 View Results
### Generate and Visualize Report

A configuration file, `marco.config.js`, contains default paths to store reports. We can configure them based on our needs.

```sh
yarn marco generate --platform android
```

```sh
yarn marco visualize --platform android
```

This will open up a dashboard where we can select events to analyse data.


Move or copy them to the root directory `marco-results/webview_v_13_13_5/` folder for comparison.

---

</details>
