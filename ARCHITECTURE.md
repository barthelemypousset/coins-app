## Technical choices
### State and data
For handling API data I chose TanStack Query rather than a global state manager such as Redux.
The application mainly deals with server state (data coming from an API) rather than complex client-side state. TanStack Query provides built-in mechanisms for:

* data fetching
* caching
* background refetching
* loading and error states
* pagination support

Using Redux would have required implementing additional logic for async actions, caching , states and error.

### HTTP Requests
For making HTTP requests I used Axios, although the native fetch API was also considered.
Axios provides several small advantages that simplify API integration:

* automatic JSON parsing
* more consistent error handling
* cleaner request configuration
* easier mocking in tests

The native fetch API would also have been perfectly viable for this project since the API surface is small. Axios was chosen mainly for readability, maintainability and future grow of the app.

### Navigation
Because the project is built with Expo, I chose Expo Router for navigation.
Expo Router provides a file-based routing system similar to modern web frameworks and integrates naturally with Expo projects. It simplifies navigation setup and makes route structure easier to reason about.
An alternative would have been using React Navigation directly with a stack navigator. This is still the most widely used solution in React Native projects, but Expo Router internally relies on React Navigation and provides a simpler developer experience for this type of app.

# Offline and Error Handling
To handle offline scenarios I used react-native-netinfo to detect network connectivity.
The strategy implemented is:

* show cached data when available
* display an offline banner when the device has no connection
* allow users to retry failed requests

Because TanStack Query caches API responses in memory, previously fetched data can still be displayed when the device goes offline during the session.

## Flows
### data flow:
```
Index screen is opened
      ↓
useCoins() hook is called 
react query state `isLoading = true` so UI show waiting text
      ↓
React Query infinite query
      ↓
fetchCoins() function (in api folder) is called
      ↓
Axios request the api of Delta
      ↓
API response
      ↓
React Query saves and cache the response 
      ↓
UI renders once the data has loaded
More precisely when the react query state isLoading pass to false
```

### user scroll flow:
```
User scrolls Flatlist
     ↓
FlatList onEndReached
     ↓
fetchNextPage()
     ↓
React Query requests page X
     ↓
Cache updated
     ↓
FlatList rerenders with more coins
```

### detail screen flow:
```
User presses coin
      ↓
router.push("/coinDetail/:id")
      ↓
[id].tsx screen loads
      ↓
useCoinDetail(id)
      ↓
React Query fetches /coins/:id
      ↓
data cached
      ↓
UI renders
````

## connection behaviour:
### online:

```
use API(axios) to fetch data
      ↓
cache stored and handled by react React Query
      ↓
(re)render of UI
```

### offline w/ cache:
```
React Query cache will display part of UI already fetched and cached (and not expired)
Offline banner is shown
````

### offline without cache:
```
React query state `isError = true`
display error message and Retry button
```