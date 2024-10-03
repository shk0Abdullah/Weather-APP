function getWeather() {
    const city = document.getElementById("city").value; // Get the input value for the city
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`; // Insert city dynamically
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fd3fcf1b71msh74c88c33d39d954p165fd2jsn27e285c7d9ae',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            // Extracting the necessary weather data from the response
            console.log(response);
            const temp_c = response.current.temp_c;
            const temp_f = response.current.temp_f;
            const heatindex_c = response.current.heatindex_c;
            const feelslike_c = response.current.feelslike_c;
            const humidity = response.current.humidity;
            const wind_kph = response.current.wind_kph;
            const wind_degree = response.current.wind_degree;
            const windchill_c = response.current.windchill_c;
            const pressure_mb = response.current.pressure_mb;
// hPa for pressure units
            // Displaying data in the HTML elements with corresponding IDs
            // wind chill
            document.getElementById("temp_c.").innerHTML = `${temp_c} °C`;
            document.getElementById("humidity.").innerHTML = `${humidity}%`;
            document.getElementById("wind_kph.").innerHTML = `${wind_kph} kph`
            document.getElementById("pressure_mb").innerHTML = `${pressure_mb} hPa`;
            document.getElementById("windchill_c").innerHTML = `${windchill_c} kg⋅cal/m2/h`;
            document.getElementById("heatindex_c").innerHTML = `${heatindex_c} °C`;
            document.getElementById("feelslike_c").innerHTML = `${feelslike_c} °C`;
            document.getElementById("temp_c").innerHTML = `${temp_c} °C`;
            document.getElementById("temp_f").innerHTML = `${temp_f} °F`;
            // document.getElementById("condition_text").innerHTML = `Condition: ${condition_text}`;
            document.getElementById("humidity").innerHTML = `${humidity}%`;
            document.getElementById("wind_kph").innerHTML = `${wind_kph} kph`;
            document.getElementById("wind_degree").innerHTML = `${wind_degree}°`;
        })
        .catch(err => console.error(err));
}
