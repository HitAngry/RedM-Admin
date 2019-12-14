RegisterNuiCallbackType("changeModel");
on("__cfx_nui:changeModel", async (data, cb) => {
  exports.character.changeModel(data);
});
