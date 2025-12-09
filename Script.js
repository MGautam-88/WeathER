const bt = document.getElementById("SBtn");
const ct = document.getElementById("city-input");
const pt = document.getElementById("pin");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityDate = document.getElementById("city-date");
const cityTemp = document.getElementById("city-temp");
const cityAQI = document.getElementById("city-q");
const cityCond = document.getElementById("city-c");

let timeInterval = null;

async function getData(cityName) {
  const ot = await fetch(`http://api.weatherapi.com/v1/current.json?key=76968edcc4b2466b88085421250612&q=${encodeURIComponent(cityName)}&aqi=yes`);
  return await ot.json();
}

function getCityTime(timezone) {
  const now = new Date();
  const options = {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true     // AM/PM format
  };
  return new Intl.DateTimeFormat("en-US", options).format(now);
}

function getCityDate(timezone) {
  const now = new Date();
  const options = {
    timeZone: timezone,
    weekday: "long",     // Tuesday
    day: "2-digit",      // 09
    month: "long",       // December
    year: "numeric"      // 2025
  };

  // return new Intl.DateTimeFormat("en-GB", options).format(now);
  const formatted = new Intl.DateTimeFormat("en-GB", options).format(now);
  const parts = formatted.split(" ");
  const weekday = parts.shift(); // "Tuesday"
  return `${weekday} , ${parts.join(" ")}`;
}

bt.addEventListener("click", async () => {
  const val = ct.value;
  const result = await getData(val);
  display(result);
});

function display(result) {
  if (!result || result.error) {
    cityName.innerText = "Invalid City Name!";
    // cityTime.innerText = "&nbsp;&nbsp;&nbsp;&nbsp;400 (Bad Request)";
    cityTime.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400 (Bad Request)";
    cityDate.innerHTML="";
    cityTemp.innerText = "";
    cityAQI.innerText = "";
    cityCond.innerText = "";
    // clear any running time interval when invalid
    if (timeInterval) { clearInterval(timeInterval); timeInterval = null; }
    return;
  }

  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;

  // clear previous interval before creating a new one
  if (timeInterval) {
    clearInterval(timeInterval);
    timeInterval = null;
  }
  // cityTime.innerText = `Date-Time: ${result.location.localtime}`;
  // update immediately and then every second
  const updateTime = () => {
    const timeStr = getCityTime(result.location.tz_id);
    cityTime.innerText = `Local_Time: ${timeStr}`;
  };
  updateTime();
  timeInterval = setInterval(updateTime, 1000);
  
  const dateStr = getCityDate(result.location.tz_id);
  cityDate.innerText = `Date: ${dateStr}`;

  cityTemp.innerHTML = `Temp: <span>${result.current.temp_c}°C</span>`;
  const tmp = cityTemp.querySelector("span");
  tmp.classList.remove("cl", "ht");
  if (parseFloat(tmp.innerText) < 20.0) tmp.classList.add("cl");
  else tmp.classList.add("ht");

  cityAQI.innerText = `AQI:- co:${result.current.air_quality.co} , no2:${result.current.air_quality.no2} , o3:${result.current.air_quality.o3} , so2:${result.current.air_quality.so2} , pm10:${result.current.air_quality.pm10}`;
  cityCond.innerHTML = `Conditions: <span class="ul">${result.current.condition.text}</span>`;

  updateBackground(result.current.condition.text);
}

pt.addEventListener("click", async () => {
  // called a helper function to get longi and lati
  function getPosition() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {//if  geoloc gets undefined then this if statement executes
        reject(new Error("Geolocation not supported"));
        return;
      }
      //if geolocation is nat false then 👇
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 8000 });//It is a browser API that gets the user’s current GPS location
    });
  }

  //☝️first we try to fecth the position using getPosition()
  try {
    const pos = await getPosition();
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const result = await getData(`${lat},${lon}`);
    display(result);
  } 
  // if location can't be fetched  then  catch is applied
  catch (err) {
    alert("Can't fetch the location right now!");
  }
});

// key-shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    e.preventDefault();
    ct.focus();
    ct.select();
  }
  if (e.key === "Enter") {
    bt.click();
  }
});
