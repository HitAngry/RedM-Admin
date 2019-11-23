/**
 * loadModel : hash ( int )
 * Async function, request model and sleep during model is not loaded 
 * @param {number} hash Hash Model
 */
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

/**
 * loadModel : hash ( int )
 * Async function, request model and sleep during model is not loaded 
 */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}