let display = false;

RegisterCommand('admin', async (source, args) => {
  setDisplayMenuAdmin();
});

RegisterNuiCallbackType("teleportplace");
on("__cfx_nui:teleportplace", (data, cb) => {
  SetEntityCoords(player.getPed(), data.x, data.y, data.z, 0, 0, 0, false);
});

RegisterNuiCallbackType("teleportcustom");
on("__cfx_nui:teleportcustom", (data, cb) => {
  SetEntityCoords(player.getPed(), parseInt(data.x), parseInt(data.y), parseInt(data.z), 0, 0, 0, false);
});

RegisterNuiCallbackType("createPed");
on("__cfx_nui:createPed", async (data, cb) => {
  const coords = player.getCoords();
  const ped = GetHashKey(data);
  await loadModel(ped);
  let pedInstance = CreatePed(ped, coords.x, coords.y - 2, coords.z + 0.95, 0.0, true, true, true, true);
  N_0x283978a15512b2fe(pedInstance, true); // i think it's force reload texture ped
});

RegisterNuiCallbackType("giveWeapon");
on("__cfx_nui:giveWeapon", async (data, cb) => {
  if(IsWeaponValid(data)) {
    const ped = player.getPed();
    const weaponHash = GetHashKey(data);
    GiveDelayedWeaponToPed(ped, weaponHash, 100, true, false);
  } else {
    console.error("weapon id invalid");
  }
});

RegisterNuiCallbackType("quitMenu");
on("__cfx_nui:quitMenu", (data, cb) => {
  handleNuiFocus();
});

const handleNuiFocus = () => {
  if(!display) {
    SetNuiFocus(true, true);
    console.warn("ADMIN MENU - FOCUS:ON");
  } else {
    SetNuiFocus(false, false);
    console.warn("ADMIN MENU - FOCUS:OFF");
  }
  display = !display;
}

const setDisplayMenuAdmin = () => {
  handleNuiFocus();
  SendNuiMessage(JSON.stringify({}));
}