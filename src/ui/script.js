let display = false;
$("#app").hide();

window.addEventListener('message', function(event) {
  if (!display) {
    console.log("SHOW")
    $("#app").show();
  } else {
    console.log("HIDE")
    $("#app").hide();
  }
  display = !display;
})
