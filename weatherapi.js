const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": config.API_KEY,
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city01) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city01,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city01;
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;

      dateObj01 = new Date(response.sunrise * 1000);
      utcString01 = dateObj01.toLocaleTimeString();
      time01 = utcString01
      sunrise.innerHTML = time01;

      dateObj02 = new Date(response.sunset * 1000);
      utcString02 = dateObj02.toLocaleTimeString();
      time02 = utcString02
      sunset.innerHTML = time02;
    })
    .catch((err) => console.error(err));
};

var el = document.getElementById("submitbtn");
function getcity(e) {
  var city01 = document.getElementById("city01");
  if (city01) {
    getWeather(city01.value);
  }
}

if (el) {
  el.addEventListener("submit", getcity);
}

getWeather("Bangaon");











// var kol = document.getElementById("kol");
// var del = document.getElementById("del");
// var mum = document.getElementById("mum");
// var ch = document.getElementById("ch");

// if (kol) {
//     el.addEventListener("click", getWeather("Kolkata"));
//   }
//   if (del) {
//     el.addEventListener("click", getWeather("Delhi"));
//   }
//   if (mum) {
//     el.addEventListener("click", getWeather("Mumbai"));
//   }
//   if (ch) {
//     el.addEventListener("click", getWeather("Chennai"));
//   }















fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    tempkol.innerHTML = response.temp;
    humiditykol.innerHTML = response.humidity;
    wind_speedkol.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    tempch.innerHTML = response.temp;
    humiditych.innerHTML = response.humidity;
    wind_speedch.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=noida",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    tempnoi.innerHTML = response.temp;
    humiditynoi.innerHTML = response.humidity;
    wind_speednoi.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    tempdel.innerHTML = response.temp;
    humiditydel.innerHTML = response.humidity;
    wind_speeddel.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurgaon",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    tempgur.innerHTML = response.temp;
    humiditygur.innerHTML = response.humidity;
    wind_speedgur.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    tempmum.innerHTML = response.temp;
    humiditymum.innerHTML = response.humidity;
    wind_speedmum.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));






  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      tempny.innerHTML = response.temp;
    })
    .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=washington",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
    
        tempwdc.innerHTML = response.temp;
      })
      .catch((err) => console.error(err));

      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=california",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
      
          tempcal.innerHTML = response.temp;
        })
        .catch((err) => console.error(err));

        fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=berlin",
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
        
            tempber.innerHTML = response.temp;
          })
          .catch((err) => console.error(err));

          fetch(
            "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london",
            options
          )
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
          
              templon.innerHTML = response.temp;
            })
            .catch((err) => console.error(err));

            fetch(
              "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai",
              options
            )
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
            
                tempsan.innerHTML = response.temp;
              })
              .catch((err) => console.error(err));

              fetch(
                "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=moscow",
                options
              )
                .then((response) => response.json())
                .then((response) => {
                  console.log(response);
              
                  tempmos.innerHTML = response.temp;
                })
                .catch((err) => console.error(err));

                fetch(
                  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=barcelona",
                  options
                )
                  .then((response) => response.json())
                  .then((response) => {
                    console.log(response);
                
                    tempbar.innerHTML = response.temp;
                  })
                  .catch((err) => console.error(err));
              
                  fetch(
                    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=paris",
                    options
                  )
                    .then((response) => response.json())
                    .then((response) => {
                      console.log(response);
                  
                      temppar.innerHTML = response.temp;
                    })
                    .catch((err) => console.error(err));
                