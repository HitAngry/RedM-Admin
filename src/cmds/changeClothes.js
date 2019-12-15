RegisterCommand('clothes', (source, args) => {
  if (!args[0]) {
    return console.error("Usage : clothes [clothes Hash]");
  } else {
    let ped = exports.character.getPed();
    if (ped) {
      SetPedComponentEnabled(ped, args[0], true, false, false);
    }
  }
});