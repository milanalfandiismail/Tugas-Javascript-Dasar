const weatherData = {

    "Jakarta": {
        temperature: 35,
        condition: "Cerah"
    },

    "Samarinda": {
        temperature: 32,
        condition: "Cerah"
    },

    "Malang": {
        temperature: 24,
        condition: "Hujan Deras"
    },

    "Bogor": {
        temperature: 29,
        condition: "Mendung"
    },

    "Surabaya": {
        temperature: 33,
        condition: "Cerah"
    },

    "Tenggarong": {
        temperature: 24,
        condition: "Hujan"
    }

};


function showWeather() {
      const city = document.getElementById("cityInput").value;

      if (weatherData[city]) {
        const data = weatherData[city];
        console.log(`Kota: ${city}`);
        console.log(`Suhu: ${data.temperature}°C`);
        console.log(`Kondisi: ${data.condition}`);
      } else {
        console.log("Data cuaca untuk kota tersebut sedang tidak tersedia");
      }
    }

    // Event Tombol
    document.getElementById("btnShow").addEventListener("click", showWeather);

    // Event Enter
    document.getElementById("cityInput").addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        showWeather();
      }
    });