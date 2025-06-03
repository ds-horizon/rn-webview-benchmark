module.exports = {
  android: {
    dataDir: [
      { path: './marco-results/webview_v_13_13_5/android/log_emulator.json', reportName: 'realDevice_13_13_5' },
      { path: './marco-results/webview_v_13_13_5/android/log_realDevice.json', reportName: 'emulator_13_13_5' },
      { path: './marco-results/webview_v_13_14_1/android/log_emulator.json', reportName: 'realDevice_13_14_1' },
      { path: './marco-results/webview_v_13_14_1/android/log_realDevice.json', reportName: 'emulator_13_14_1' },
    ],
    port: '8080',
  },
  ios: {
    dataDir: [{
      path: './marco-results/webview_v_13_13_5/ios/log_simulator.json',
      reportName: 'ios_Simulator_13_13_5',
    },
      {
        path: './marco-results/webview_v_13_14_1/ios/log_simulator.json',
        reportName: 'ios_Simulator_13_14_1',
      }],
    port: '8080',
  }
};
