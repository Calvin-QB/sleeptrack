## Setting Up & Running the App

1. **Prerequisites**: 
   - Ensure you have `Node.js` and `npm` installed on your machine.

2. **Dependency Installation**:
   - In the main directory of the project, run the following command:
     ```
     npm install
     ```
   - This installs all required dependencies.

3. **Starting the App**:
   - Use this command to start the app:
     ```
     ionic serve
     ```
   - This will launch a local development server and open the app in your default web browser.

4. **Exploration**:
   - Navigate through the app in your browser and explore its functionalities.

## Overnight Sleep Logging

- Users can log overnight sleep with a simple button press. Chosen for its straightforwardness and user-friendliness.

## Daytime Sleepiness Logging

- Log sleepiness during the day through select options. Utilizing Stanford's ratings, the `ion-select` component is used to present multiple options, allowing users to select only one.

## Date Logging

- No need for users to input a date when logging sleepiness or overnight sleep. The app records the time automatically, understanding that predicting future sleep or sleepiness can be challenging.

## Data Viewing

- Access logged data via a bottom tab. Data is shown as a descending list based on date. The `Ionic-list` component displays rows of sleep data efficiently.

## Data Backup

- Supports data backup but not additional native device resource features. Backup is done by `Capacitor` from Ionic, saving data in local storage.

## Mobile Design Principles

- Adhering to mobile design principles, the app has an easy-to-use universal navigation bar. With a clean, responsive UI, users can understand and navigate the app easily. Straightforward buttons enhance user experience.
