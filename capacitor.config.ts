import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ella.kit',
  appName: "Ella's Kitchen",
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      // SplashMaintainAspectRatio: 'true',
      // FadeSplashScreenDuration: '300',
      // SplashShowOnlyFirstTime: 'false',
      // SplashScreen: 'screen',
      // SplashScreenDelay: '2000',
      // ShowSplashScreenSpinner: 'false',
      orientation: 'portrait',
      'android-minSdkVersion': '30',
      'android-targetSdkVersion': '33'
    }
  },
  plugins: {

    SplashScreen: {
      // launchShowDuration: 3000,
      launchAutoHide: false,
      //launchFadeOutDuration: 3000,
      // backgroundColor: "#ffffffff",
      // androidSplashResourceName: "splash",
      // androidScaleType: "CENTER_CROP",
      // showSpinner: true,
      // androidSpinnerStyle: "large",
      // iosSpinnerStyle: "small",
      // spinnerColor: "#999999",
      splashFullScreen: true,
      // splashImmersive: true,
      // layoutName: "launch_screen",
      // useDialog: true,
    },

    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com", "apple.com"],
    },
  },
};

export default config;
