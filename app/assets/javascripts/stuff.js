


function showInfo(){
  var information = document.getElementById('information');
    information.innerHTML = "Loading...";
  var response = $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json", function(){
  console.log(response.responseJSON);
  var arrayOfInfo = response.responseJSON;
  var newHTML = "";
  for(var i = 0; i< arrayOfInfo.length; i++){
    newHTML += '<h3>' + arrayOfInfo[i].borough + '</h3>';
    newHTML += '<p>' + arrayOfInfo[i].day_s + '</p>';
    newHTML += '<p>' + arrayOfInfo[i].market_name + '</p>';
    newHTML += '<p>' + arrayOfInfo[i].street_address + '</p>';
  }
  information.innerHTML = newHTML;
  console.log(newHTML);
});

}
// take this information
// grab an HTML element and modify it's properties
// show it on the DOM
