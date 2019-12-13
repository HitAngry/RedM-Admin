RegisterNuiCallbackType("giveWeapon");
on("__cfx_nui:giveWeapon", async (data, cb) => {
  console.log("toto")
  console.log(data)
  if(IsWeaponValid(data.weapon.asset)) {
    console.log(data)
    const ped = player.getPed();
    const weaponHash = GetHashKey(data.weapon.asset);
    GiveDelayedWeaponToPed(ped, weaponHash, data.ammo, true, false);
  } else {
    console.error("weapon id invalid");
  }
});