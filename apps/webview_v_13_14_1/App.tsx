import React, { useState } from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import { PerformanceTracker } from '@d11/marco';
import {WebComponent} from "./src/WebComponent.tsx";

PerformanceTracker.configure({ persistToFile: true });

export default function App() {
    const [showWebView, setShowWebView] = useState(false);
    const handleOnPress = () => {setShowWebView(true);
        PerformanceTracker.track('wv_load_start', Date.now());}

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {showWebView ? (
                <WebComponent/>
            ) : (
                <View style={{ flex: 1, alignItems:'center',justifyContent:'center'}}>
                    <Button
                        title="Open WebView"
                        onPress={handleOnPress}
                    />
                </View>
            )}
        </SafeAreaView>
    );
}
