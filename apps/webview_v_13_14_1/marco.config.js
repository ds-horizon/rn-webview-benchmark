module.exports = {
  android: {
    packageName: 'com.webview_v_13_14_1', // Update if your package name is different
    outputPath: './marco-reports/android',
    dataDir: [
      { path: './marco-reports/android/log_realDevice.json', reportName: 'realDevice' },
      { path: './marco-reports/android/log_emulator.json', reportName: 'emulator' },
    ],
    port: '8080',
  },
  ios: {
    packageName: 'org.reactjs.native.example.webviewv13141', // Update if your package name is different
    outputPath: './marco-reports/ios',
    dataDir: [{
      path: './marco-reports/ios/log_simulator.json',
      reportName: 'ios_Simulator',
    }],
    port: '8080',
  }
};
