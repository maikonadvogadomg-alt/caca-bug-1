import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: '0b7ad98a-1fa7-4ad6-9ccc-a46e4d770482',
  appName: 'bug-',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f172a',
      showSpinner: false,
    },
  },
};

export default config;