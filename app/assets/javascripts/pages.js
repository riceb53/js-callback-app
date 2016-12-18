
function changeColor() {
  // change the color of "first"
  //  grab that element from the DOM

  setTimeout(function(){
    var firstOne = document.getElementById('first');
    firstOne.style.color = "red";
    setTimeout(function(){
      var secondOne = document.getElementById('second');
      secondOne.style.color = "green";
      setTimeout(function(){
        var thirdOne = document.getElementById('third');
      thirdOne.style.color = "lightskyblue";
      }, 1000)
    }, 1000)
  }, 1000)
}
