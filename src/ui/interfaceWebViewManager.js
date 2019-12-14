// INIT INTERFACE
let display = false;
$("#app").hide();

// EVENT FROM CLIENT
window.addEventListener('message', function(event) {
  $("#app").show();
  display = event.data.display;
});

// DISABLE INTERFACE
window.addEventListener('keypress', (event) => {
  if(event.key === 'g') { // KEYPRESS 'E'
    $.post('http://admin/leaveMenu', JSON.stringify({
      display: display
    }));
    $("#app").hide();
  }
});