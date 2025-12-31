# App Version Sync Guide

## Manual Update Process

1. **Get version from App Store Connect:**
   - Go to App Store Connect → My Apps → OxyROX
   - Check the current version and build number
   - Note the last update date

2. **Get version from Google Play Console:**
   - Go to Google Play Console → OxyROX
   - Check the current version and build number
   - Note the last update date

3. **Update `app/config/app-versions.ts`:**
   ```typescript
   oxyrox: {
     ios: {
       version: '1.0.1', // Update this
       build: '2', // Update this
       lastUpdated: '2025-12-28T22:00:00Z', // Update this
     },
     android: {
       version: '1.0.1', // Update this
       build: '2', // Update this
       lastUpdated: '2025-12-28T22:00:00Z', // Update this
     },
   }
   ```

## Future: Automated Sync (App Store Connect API)

To automate this process, you'll need:

1. **App Store Connect API Key:**
   - Generate API key in App Store Connect
   - Add to environment variables: `APP_STORE_CONNECT_KEY_ID`, `APP_STORE_CONNECT_ISSUER_ID`, `APP_STORE_CONNECT_PRIVATE_KEY`

2. **Google Play Developer API:**
   - Enable Google Play Developer API
   - Add service account credentials

3. **Create API endpoint:**
   - `/api/sync-versions` endpoint that fetches from both stores
   - Updates `app-versions.ts` or a database
   - Can be called via cron job or webhook

## Display Version Info

The `AppVersionBadge` component automatically displays version info on pages where it's included.

To add to other pages:
```tsx
import AppVersionBadge from '../components/AppVersionBadge';

<AppVersionBadge appId="oxyrox" platform="both" showBuild={true} />
```





