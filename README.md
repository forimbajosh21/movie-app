# Movie App

This is a React Native application built with Expo for browsing and exploring movies. The app supports Android, iOS, and web platforms.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://classic.yarnpkg.com/lang/en/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A package manager like `npm` or `yarn`
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) (for running on emulators/simulators)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/forimbajosh21/movie-app.git
   cd movie-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create an `.env` file in the root directory and add the following environment variables:

   ```bash
   EXPO_PUBLIC_API_URL=https://api.themoviedb.org/3
   EXPO_PUBLIC_ASSET_URL=https://image.tmdb.org/t/p/original
   EXPO_PUBLIC_API_KEY=your_api_key_here
   ```

   > Replace your_api_key_here with your API key from [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Running the Application

1. Start the Expo development server:
   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

    /src
        /app           # Expo file-base routing screens
        /constants     # Application-wide constants
        /components    # Reusable UI components
        /services      # API services and queries
        /store         # Redux state management
        /types         # TypeScript type definitions
        /utils         # Utility functions

## Any decisions, challenges, or bugs you faced.

- When I was implementing the trailer-watching feature in the app, the only available source was YouTube. However, some video players do not support playing YouTube videos directly. To address this, I embedded the YouTube video in a WebView, but I encountered an issue with handling the video playback state, since react-native-webview does not support it natively. I then found react-native-youtube-iframe, which allows YouTube videos to be played in a WebView and supports playback state handling natively. However, it was quite buggy on Android, so I ended up redirecting Android users to the web browser or the YouTube app instead.
- I initially planned to implement the search functionality in the app but ultimately decided not to.
