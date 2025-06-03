import React from 'react';
import { WebView } from 'react-native-webview';
import {PerformanceTracker} from "@d11/marco";

// ...
export const WebComponent = () => {
    return <PerformanceTracker tagName={'wv_Load_end'} style={{ flex: 1 }} >
                <WebView source={{ uri: 'https://reactnative.dev/' }}
                    // onLoadEnd={() =>{PerformanceTracker.track('wv_Load_end', Date.now());}}
                    style={{ flex: 1 }} />
           </PerformanceTracker>
}
