# Coins App

A simple **React Native** application that fetches and displays cryptocurrency coins from the Delta API.
The app allows users to browse coins, view details for a specific coin, and refresh the data.

The project focuses on **clean architecture, data fetching strategy, error handling, and offline behavior** rather than UI complexity.

---

## Tech Stack

* Expo
* React Native
* Expo Router
* TanStack Query (React Query)
* Axios
* React Native NetInfo
* Jest-expo

---

## Features

### Coin List

* Fetches coins from the Delta API
* Displays them in a scrollable list
* Infinite scrolling pagination
* Each item displays:

  * icon
  * name
  * symbol
  * numeric data

### Coin Detail

* Navigate to a detail screen when tapping a coin
* Fetch additional data for the selected coin
* Refresh button to reload the data
* Displays the last time data was updated

### Offline & Error Handling

* Detects network status
* Displays cached data when offline
* Shows loading states while fetching
* Displays error messages with retry options

---

## Data Fetching Strategy

Data fetching is handled with **TanStack Query**.

Benefits:

* built-in caching
* loading and error states
* pagination support
* manual refetching

The coin list uses `useInfiniteQuery` to progressively load pages from the API.

---

## Offline Strategy

Network connectivity is detected using `react-native-netinfo`.

When the device is offline:

* previously fetched data is still displayed from the cache
* an offline banner informs the user
* users can retry failed requests

---

## Testing

Tests focus on the **data layer**, where most application logic resides.

Tested behaviors include:

* API parsing
* API data retrieval
* hook success states (WIP)
* hook error handling (WIP)

Tools used:

* Jest
* jest-expo

---

## Running the Project

Install dependencies:

```
npm install
```

Start the development server:

```
npm run start
```

Run tests:

```
npm run test
```

---

## Possible Improvements

With more time the following improvements could be added:

* search or filtering for coins
* persistent cache using AsyncStorage
* improved UI polish and animations
* additional test coverage
