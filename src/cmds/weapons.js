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