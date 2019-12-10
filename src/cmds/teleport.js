RegisterNuiCallbackType("teleportplace");
on("__cfx_nui:teleportplace", (data, cb) => {
  SetEntityCoords(player.getPed(), data.x, data.y, data.z, 0, 0, 0, false);
});

RegisterNuiCallbackType("teleportcustom");
on("__cfx_nui:teleportcustom", (data, cb) => {
  SetEntityCoords(player.getPed(), parseInt(data.x), parseInt(data.y), parseInt(data.z), 0, 0, 0, false);
});