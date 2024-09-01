# Task Manager App

A task management application built using React Native and the Expo framework. This app features different roles (Administrator, Manager, User) with specific permissions for task handling and notifications.

## Features Overview

- **Administrator**: Full control over managers, users, and tasks. Can add, delete, edit, and assign tasks. Can approve or reject task deletion requests from managers.
- **Manager**: Can add users, create tasks, view and edit tasks, assign tasks, and request task deletions. Receives notifications for overdue tasks and task deletions.
- **User**: Can view assigned tasks, mark tasks as done, and upload required pictures. Receives notifications for assigned tasks.

## Installation

### Prerequisites

- **Node.js**: Install from [Node.js](https://nodejs.org/).
- **Expo CLI**: Install with `npm install -g expo-cli`.
- **Android Studio**: Install and set up an emulator.

### Steps for Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/taskmanagerApp.git
   cd taskmanagerApp

2. **Install dependencies**:
    ```bash
    npm install

3. **Start the Expo development server**:
    ```bash
    npx expo start

4. **Run on a physical device**:

    - Install Expo Go from the app store.
    - Scan the QR code displayed in Expo Developer Tools.

5. **Run on an Android emulator**:

    - Launch your Android emulator via Android Studio.
    - In Expo Developer Tools, select "Run on Android device/emulator."



### Steps for Production

1. **Build the app**:
    ```bash
    npx expo build:android

2. **Test the production build**:

    Download the APK or install it directly on a device.

3. **Deploy the app**:

    Upload the APK to the Google Play Store or distribute it as needed.


### Android Emulator Setup
- Install Android Studio: Download from Android Studio.
- Set up the Android SDK: Ensure it is installed during setup.
- Create a virtual device: Use AVD Manager in Android Studio.
- Set ANDROID_HOME: Add the Android SDK location to your system's environment variables.


### Common Issues and Solutions
SDK Path Issue: Ensure ANDROID_HOME is set correctly.
Expo CLI Warning: Use the local CLI with npx expo start.