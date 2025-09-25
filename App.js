import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import AppConfig from './src/services/config'; // make sure this file exists

export default function App() {
  useEffect(() => console.log('App Config:', AppConfig), []);
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Environment Check
      </Text>
      <Text>API_BASE_URL: {String(AppConfig.apiBaseUrl)}</Text>
      <Text>APP_NAME: {String(AppConfig.appName)}</Text>
      <Text>DEBUG_MODE: {String(AppConfig.debugMode)}</Text>
      <Text>VERSION: {String(AppConfig.version)}</Text>
    </SafeAreaView>
  );
}
