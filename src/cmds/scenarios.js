RegisterNuiCallbackType("startScenario");
on("__cfx_nui:startScenario", async (data, cb) => {
  TaskStartScenarioInPlace(player.getPed(), GetHashKey(data.scenario), 0, false);
  await sleep(data.delay);
  ClearPedTasks(player.getPed());
  console.log(data);
});