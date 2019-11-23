let display = false;

RegisterCommand('admin', async (source, args) => {
  setDisplayMenuAdmin();
});

RegisterNuiCallbackType("teleportplace");
on("__cfx_nui:teleportplace", (data, cb) => {
  SetEntityCoords(player.getPed(), data.x, data.y, data.z, 0, 0, 0, false);
});

RegisterNuiCallbackType("teleportcustom");
on("__cfx_nui:teleportcustom", (data, cb) => {
  SetEntityCoords(player.getPed(), parseInt(data.x), parseInt(data.y), parseInt(data.z), 0, 0, 0, false);
});

RegisterNuiCallbackType("quitMenu");
on("__cfx_nui:quitMenu", (data, cb) => {
  handleNuiFocus();
});

const handleNuiFocus = () => {
  if(!display) {
    SetNuiFocus(true, true);
    console.warn("ADMIN MENU - FOCUS:ON");
  } else {
    SetNuiFocus(false, false);
    console.warn("ADMIN MENU - FOCUS:OFF");
  }
  display = !display;
}

const setDisplayMenuAdmin = () => {
  handleNuiFocus();
  SendNuiMessage(JSON.stringify({}));
}