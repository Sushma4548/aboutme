function myfunction(){


    let base = Number($("#base").val());
    let height = Number($("#height").val());
    if(base < 0 || height < 0){
     $("#result").html("Please enter positive values");
    }else{
    let area = 0.5*parseInt(base)*parseInt(height);
    alert(document.getElementById("result").innerHTML = area);
  
 }
 
 }
 
 const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
 document.getElementById('submit').addEventListener('click', function() {
     fetch(url)
     .then((res) => { return res.json() })
     .then((data) => {           
         data.forEach((item) => {
             const { image } = item
 
             document.getElementById("image").src = image
      
         });
     })
     .catch(function (error) {
         console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
     })
 })
 