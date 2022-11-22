function nasarequested(){
  const NASA_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
  const API_KEY = "dTlSxeaeq9l0CdSoa9qFmJR49HfQZxQ82PxBhK7Q";
  const dateInput = document.querySelector("#datepicker");
  const title = document.querySelector("#title");
  const copyright = document.querySelector("#copyright");
  const mediaSection = document.querySelector("#media-section");
  const information = document.querySelector("#description");
  
  const currentDate = new Date().toISOString().slice(0, 10);
  // Метод toISOString()возвращает строку в упрощенном расширенном формате ISO ( ISO 8601 ), 
  // которая всегда имеет длину 24 или 27 символов ( YYYY-MM-DDTHH:mm:ss.sssZ
  // или ±YYYYYY-MM-DDTHH:mm:ss.sssZ, соответственно).
  // Часовой пояс всегда имеет нулевое смещение UTC, что обозначается суффиксом Z.

  // Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

  
  const imageSection =
  `<a id="hdimg" href="" target="-blank">
    <div class="image-div">
      <img id="image_of_the_day" src="" alt="">
    </div>
  </a>`
  
  const videoSection =
  `<div class="video-div"> 
    <iframe id="videoLink" src="" frameborder="0"></iframe>
  </div>`
  
  let newDate = "&date=" + dateInput.value + "&";
  
  
  function fetchData(){
          try{
              fetch (NASA_URL + API_KEY + newDate)
              .then (response=> response.json())
              .then (json=>{
                  console.log (json);
                  diplaydata (json)
              })
              }catch (error){
                  console.log (error)
              }
      }
      

  function diplaydata(data){
      
      title.innerHTML = data.title;
      
      if(data.hasOwnProperty("copyright")){
          copyright.innerHTML = data.copyright;
      } else{
          copyright.innerHTML = ""
      }   
      
      date.innerHTML = data.date;
      dateInput.max = currentDate;
      dateInput.min = "1995-06-16";
      
          if(data.media_type == "video"){
              mediaSection.innerHTML = videoSection;
              document.getElementById("videoLink").src = data.url;
             
          }else{
              mediaSection.innerHTML = imageSection;
              document.getElementById("hdimg").href = data.hdurl;
              document.getElementById("image_of_the_day").src = data.url;
          }
      information.innerHTML = data.explanation
  }
  fetchData();
  }
  
  const dateInput = document.querySelector("#datepicker");
  dateInput.addEventListener('change',(e)=>{
      e.preventDefault();
      nasarequested();
  })
  
  nasarequested()