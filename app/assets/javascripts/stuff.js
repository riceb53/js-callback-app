  function changeColorOfMarket(theDiv) {
    if (theDiv.style.color === 'lightgrey') {
      theDiv.style.color = 'black';
    } else {
      theDiv.style.color = 'lightgrey';
    }
  }


  function onlyTuesday(){
    // grab all the divs with the class market
    var markets = document.querySelectorAll('.markets');
    // remove all the markets that are not open on tuesday
    for (var i = 0; i < markets.length; i++) {
      if (markets[i].innerHTML.indexOf("Tuesday") === -1) {
        markets[i].style.display = "none";
      }
    }
  }

function showInfo(){
  var information = document.getElementById('information');
    information.innerHTML = "Loading...";
  var response = $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json", function(){
  // console.log(response.responseJSON);
  var arrayOfInfo = response.responseJSON;
  var newHTML = "";
  for(var i = 0; i< arrayOfInfo.length; i++){
    newHTML += '<div class="markets" onclick="changeColorOfMarket(this)">';
    newHTML += '<h3>' + arrayOfInfo[i].borough + '</h3>';
    newHTML += '<p>' + arrayOfInfo[i].day_s + '</p>';
    newHTML += '<p>' + arrayOfInfo[i].market_name + '</p>';
    newHTML += '<p>' + arrayOfInfo[i].street_address + '</p>';
    newHTML += '</div>';
  }
  information.innerHTML = newHTML;
});



}
// take this information
// grab an HTML element and modify it's properties
// show it on the DOM
