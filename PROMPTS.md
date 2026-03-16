Initial prompt:

```
I got this challenge to realise, I want you to make a plan to realise this project.
The "personal notes" parts are suggestion I tought about spontaneously to respond to the needs of the exercice plus thinking ahead about optimisation and futur grow of the app

#### List screen

- Load coins from the Delta API.
- Display them in a scrollable list.
- Implement pagination or another reasonable strategy to handle larger datasets.
- Each list item should show:
  - an icon
  - name and symbol
  - at least one numeric field from the API

> personal notes:
>> fetch to gather coin data and then parse it. Also read about Axios
>> Flatlist help optimise ListViews in a lot of ways
>> paging system by fetching only when bottom of list reached
>> pressable card type component with icon, name, symbol, value

#### Detail screen

- Tapping a list item should navigate to a coin detail screen.
- Load additional data for that coin and display multiple fields from the response.
- Provide a way to refresh the data.
- Show some indication of when the data was last updated (based on local state).

> personal notes:
>> fetch the coins/:id api
>> modal or stack nav ?
>> refresh on pull down (new fetch)
>> Update and display timestamp on refresh

#### Offline & error behavior

- The app should behave reasonably when the device is offline or when requests fail.
- Decide what should be cached, for how long, and how stale data should be treated.
- Show meaningful loading and error states, and provide a way for the user to recover.

> personal note:
>> fetch w/ try/catch
>> Redux to store the data
>> display a clear error screen + retry button
>> cache with persistore
```

I got to disagree with the IA on the navigation system, chatGPT proposed to use react-navigation while I decided to use Expo Router which is the proposed solution for expo projects. Also read a lot of good reviews about it online

