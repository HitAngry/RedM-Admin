RegisterNuiCallbackType("createPed");
on("__cfx_nui:createPed", async (data, cb) => {
  const coords = player.getCoords();
  const ped = GetHashKey(data);
  await loadModel(ped);
  let pedInstance = CreatePed(ped, coords.x, coords.y - 2, coords.z + 0.95, 0.0, true, true, true, true);
  N_0x283978a15512b2fe(pedInstance, true); // i think it's force reload texture ped
});