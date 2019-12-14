let display = false;

setTick(() => { // INTPUT KEYBOARD EVENT
  if (IsControlJustReleased(0, `INPUT_INTERACT_ANIMAL`)) { // E
    SetNuiFocus(!display, !display);
    SendNuiMessage(JSON.stringify({
      display: display
    }));
    display = !display;
  }
});

// EVENT FROM WEBVIEW CLOSE INTERFACE
RegisterNuiCallbackType("leaveMenu");
on("__cfx_nui:leaveMenu", (event, cb) => {
  SetNuiFocus(event.display, event.display);
  display = !display;
});