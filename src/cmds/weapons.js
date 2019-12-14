RegisterNuiCallbackType("giveWeapon");
on("__cfx_nui:giveWeapon", async (data, cb) => {
  exports.character.giveWeapon(data);
});