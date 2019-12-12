RegisterNuiCallbackType("startScenario");
on("__cfx_nui:startScenario", async (data, cb) => {
  console.log(data);
});