# Android Download Build (APK)

Android phones install **`.apk`** files (not `.exe`).

This repo now includes `android-app/`, a native Android WebView wrapper that loads your existing Lookout site from bundled local assets.

## Quick way (recommended): GitHub Actions

1. Push this repo to GitHub.
2. Open **Actions** → **Build Android APK**.
3. Click **Run workflow**.
4. After it finishes, open the run and download artifact: `lookout-android-debug-apk`.
5. Copy `app-debug.apk` to your Android phone and install it.

## Local build

Requirements:
- Java 17
- Android SDK + build tools
- Gradle 8.8+

Commands:

```bash
cd android-app
gradle :app:assembleDebug
```

Output:

```text
android-app/app/build/outputs/apk/debug/app-debug.apk
```

## Notes

- Runtime permissions are requested for location and notifications.
- Web files are automatically copied into `android_asset/www` during build (`syncWebAssets` task).
- If you want Play Store release, create a signed release build and replace debug signing.
