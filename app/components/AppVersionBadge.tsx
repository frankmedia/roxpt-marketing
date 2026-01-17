'use client';

import { getAppVersion } from '../config/app-versions';
import { Smartphone } from 'lucide-react';

interface AppVersionBadgeProps {
  appId: string;
  platform?: 'ios' | 'android' | 'both';
  showBuild?: boolean;
  className?: string;
}

export default function AppVersionBadge({
  appId,
  platform = 'both',
  showBuild = false,
  className = '',
}: AppVersionBadgeProps) {
  const appVersion = getAppVersion(appId);

  if (!appVersion) {
    return null;
  }

  const displayVersions = [];

  if (platform === 'ios' || platform === 'both') {
    displayVersions.push({
      platform: 'iOS',
      version: appVersion.ios.version,
      build: appVersion.ios.build,
    });
  }

  if (platform === 'android' || platform === 'both') {
    displayVersions.push({
      platform: 'Android',
      version: appVersion.android.version,
      build: appVersion.android.build,
    });
  }

  return (
    <div className={`flex items-center gap-2 text-xs text-gray-400 ${className}`}>
      <Smartphone className="w-3 h-3" />
      <span>
        {displayVersions.map((v, idx) => (
          <span key={v.platform}>
            {v.platform} v{v.version}
            {showBuild && ` (${v.build})`}
            {idx < displayVersions.length - 1 && ' • '}
          </span>
        ))}
      </span>
    </div>
  );
}







