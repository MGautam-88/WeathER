function updateBackground(weatherCondition) {
    const condition = weatherCondition.toLowerCase();
    const body = document.body;

    if (condition.includes("clear") || condition.includes("sunny")) {
        body.style.background = "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)"; 
    } 
    else if (condition.includes("cloud") || condition.includes("overcast")) {
        body.style.background = "linear-gradient(135deg, #525252 0%, #3d72b4 100%)"; 
    } 
    else if (condition.includes("rain") || condition.includes("drizzle")) {
        body.style.background = "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)"; 
    } 
    else if (condition.includes("thunder") || condition.includes("storm")) {
        body.style.background = "linear-gradient(135deg, #232526 0%, #414345 100%)"; 
    } 
    else if (condition.includes("snow") || condition.includes("ice")) {
        body.style.background = "linear-gradient(135deg, #83a4d4 0%, #b6fbff 100%)"; 
    } 
    else if (condition.includes("mist") || condition.includes("fog") || condition.includes("haze")) {
        body.style.background = "linear-gradient(135deg, #3E5151 0%, #DECBA4 100%)"; 
    } 
    else {
        body.style.background = "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)";
    }
}