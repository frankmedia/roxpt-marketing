// App Store version information
// Update this file when new versions are released
// Can be automated via App Store Connect API in the future

export interface AppVersion {
  appId: string;
  appName: string;
  ios: {
    version: string;
    build: string;
    appStoreUrl: string;
    lastUpdated: string;
  };
  android: {
    version: string;
    build: string;
    playStoreUrl: string;
    lastUpdated: string;
  };
}

export const appVersions: Record<string, AppVersion> = {
  oxyrox: {
    appId: 'oxyrox',
    appName: 'OxyROX',
    ios: {
      version: '1.0.0', // Update from App Store Connect
      build: '1', // Update from App Store Connect
      appStoreUrl: 'https://apps.apple.com/app/oxyrox',
      lastUpdated: new Date().toISOString(),
    },
    android: {
      version: '1.0.0', // Update from Play Store
      build: '1', // Update from Play Store
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.oxyrox',
      lastUpdated: new Date().toISOString(),
    },
  },
  roxsim: {
    appId: 'roxsim',
    appName: 'RoxSIM',
    ios: {
      version: '1.0.0',
      build: '1',
      appStoreUrl: 'https://apps.apple.com/gb/app/roxsim/id6755498664',
      lastUpdated: new Date().toISOString(),
    },
    android: {
      version: '1.0.0',
      build: '1',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.roxsims.app',
      lastUpdated: new Date().toISOString(),
    },
  },
};

// Helper function to get version for an app
export function getAppVersion(appId: string): AppVersion | undefined {
  return appVersions[appId];
}

// Helper function to update version (for future API integration)
export function updateAppVersion(
  appId: string,
  platform: 'ios' | 'android',
  version: string,
  build: string
): void {
  if (appVersions[appId]) {
    if (platform === 'ios') {
      appVersions[appId].ios = {
        ...appVersions[appId].ios,
        version,
        build,
        lastUpdated: new Date().toISOString(),
      };
    } else {
      appVersions[appId].android = {
        ...appVersions[appId].android,
        version,
        build,
        lastUpdated: new Date().toISOString(),
      };
    }
  }
}

