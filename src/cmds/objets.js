RegisterNuiCallbackType("createObject");
on("__cfx_nui:createObject", async (data, cb) => {
  exports.character.craftObject(data);
});