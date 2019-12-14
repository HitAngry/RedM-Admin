RegisterNuiCallbackType("createPed");
on("__cfx_nui:createPed", async (data, cb) => {
  exports.character.createEntity(data);
});