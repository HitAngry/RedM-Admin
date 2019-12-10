const loadModel = async (hash) => {
  console.log("REQUEST LOADING MODEL " + hash)
  RequestModel(hash);
  while(true) {
    if(HasModelLoaded(hash)) {
      break;
    }
    await sleep(500);
  }
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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