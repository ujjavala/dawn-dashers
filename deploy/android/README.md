# Dawn Dashers Android Deployment

This folder is for Android build outputs.

Use Unity menu:

- Tools > Dawn Dashers > Build Android

Output:

- `DawnDashers-Android.apk`

For standalone phone installs:

- Sideload the APK to the device
- The app runs offline using local fallback content

Mobile runtime notes (latest web/mobile control pass):

- HUD is compacted for smaller Android screens
- Non-essential Region/Mode chips are removed from top HUD during play
- While actively running, controls collapse to a single quick-menu button
- Tapping quick-menu pauses the run and reveals full control dock
