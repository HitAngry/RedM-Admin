RegisterNuiCallbackType("getCoords");
on("__cfx_nui:getCoords", (test) => {
  SendNuiMessage(JSON.stringify({
    type: "coords",
    data: exports.character.getCoords()
  }));
});