RegisterNuiCallbackType("getCoords");
on("__cfx_nui:getCoords", () => {
  SendNuiMessage(JSON.stringify({
    type: "coords",
    data: {
      coords: exports.character.getCoords(),
      vector: exports.character.getVector()
    }
  }));
});