## 📊 React Native WebView Benchmark

#### This repo benchmarks React Native `WebView` performance across versions using [Marco](https://marco.dreamsportslabs.com).



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

## 🔧 Setup Instructions

### 1. Clone & Install

```
git clone https://github.com/dream-sports-labs/rn-webview-benchmark
cd rn-webview-benchmark
yarn install
```

Install Maestro globally if not already:

```
npm install -g @mobile-dev/maestro
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
maestro test maestro/AndroidScript/webview_test.yml (for android)
maestro test maestro/AndroidScript/webview_test.yml (for ios)
```

---

## 📈 View Results

If Marco is configured in the app (typically in `App.tsx`):

```ts
import { PerformanceTracker } from "@d11/marco";
PerformanceTracker.configure({ persistToFile: true });
```

You can find the performance files in or on outpath specified in marco.config.js file of each app:

```
apps/webview_v_13_13_5/marco-reports/android/log_emulator.json
```

Move or copy them to the root directory `marco-results/webview_v_13_13_5/` folder for comparison or version control.

---

## ➕ Add a New Version

1. Duplicate an existing app folder:

```
cp -r apps/webview_v_13_14_1 apps/webview_v_<new_version>
```

2. Update:
    - `package.json` dependencies
    - Bundle ID for iOS
    - `.maestro/webview_test.yaml` if needed

3. Run `yarn install` + `pod install`.

---

## 🤝 Contributing

- Fork the repo
- Add new benchmarks or enhancements
- Submit a PR with details

---

## 🪪 License

MIT License © [Dream Sports Labs](https://github.com/dream-sports-labs)
