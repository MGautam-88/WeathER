🌦 WeathER — Real-Time City Weather & AQI forecasting 

A simple, responsive, and interactive Weather Forecasting Web Application that provides real-time weather details for any city worldwide.
The application fetches live data such as temperature, air quality index (AQI), local time, and sky conditions using the WeatherAPI service.
It also supports auto-detecting your current location using browser geolocation.

______________________________________________________________________________________________________________________________________________________________________________________________________
🚀 Features
✔ Search Weather by City

Enter any city name to fetch:

🌡 Temperature (°C)

🕒 Local date & time

🌥 Weather conditions

💨 AQI values (CO, NO₂, O₃, SO₂, PM10)

->

✔ Auto-Detect Current Location

Click the 📍 button to automatically:

Detect device latitude & longitude

Fetch and display weather of your current location

->

✔ Real-Time Display Update

Data is dynamically updated in the UI using JavaScript DOM manipulation.

->

✔ Intelligent Temperature Styling

Temperatures below 20°C are highlighted in cool blue (.cl),
while higher temperatures show in warm red (.ht).

->

✔ Keyboard Shortcuts

/ → instantly focus the search input

Enter → trigger search

->

✔ Error Handling

Proper messages displayed for:

Invalid city names

API errors

Geolocation denial or failure

___________________________________________________________________________________________________________________________________
🛠 Tech Stack

HTML5 – Structure

CSS3 – Styling and layout

JavaScript (ES6+) – Logic, API calls, dynamic DOM updates

WeatherAPI – Live weather and air-quality data

Browser Geolocation API – To detect user location
________________________________________________________

WeathER/

│

├── index.html      # UI layout and structure

├── style.css       # Styling and theme

├── script.js       # App logic, API calls, event handling

└── bg.js           # Handles background changes based on weather conditions

______________________________

🔧 How It Works
1. Fetching Weather by City:
    getData("New Delhi");


    Uses WeatherAPI endpoint:

    http://api.weatherapi.com/v1/current.json?q=<cityName>&aqi=yes

2. Auto Detecting Location

    Uses:

    navigator.geolocation.getCurrentPosition()


   Then fetches:

    q = "<latitude>,<longitude>"

3. Dynamic Display

    All weather details are shown using the display() function which updates:

         City Name

         Local Time

         Temperature

         AQI

         Conditions
__________________________________________

📸 UI Preview
<img width="2879" height="1530" alt="image" src="https://github.com/user-attachments/assets/7ef72497-4241-465a-a2dd-1f141c5cfa14" />
<img width="2879" height="1538" alt="image" src="https://github.com/user-attachments/assets/ea156791-4642-4e7e-8e03-f9e1956a4918" />
<img width="2878" height="1535" alt="image" src="https://github.com/user-attachments/assets/c74e5b61-0988-47ce-8dae-4083a25707c1" />



