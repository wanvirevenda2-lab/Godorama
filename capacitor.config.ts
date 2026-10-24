import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.godorama.viewer',
  appName: 'Godorama',
  webDir: 'dist',
  server: {
    // The app opens the official website directly, so its current catalog remains on the site.
    url: 'https://godorama.com',
    cleartext: false,
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
