RegisterNuiCallbackType("startScenario");
on("__cfx_nui:startScenario", async (data, cb) => {
  exports.character.playScenario(data.scenario, data.delay);
});

