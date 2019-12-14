RegisterNuiCallbackType("teleportplace");
on("__cfx_nui:teleportplace", (data, cb) => {
  exports.character.setCoords(parseInt(data.x), parseInt(data.y), parseInt(data.z));
});

RegisterNuiCallbackType("teleportcustom");
on("__cfx_nui:teleportcustom", (data, cb) => {
  exports.character.setCoords(parseInt(data.x), parseInt(data.y), parseInt(data.z));
});