class Character {
  getCoords = () => {
    let coords =  GetEntityCoords(GetPlayerPed(GetPlayerIndex()));
    return {
      "x" : coords[0],
      "y" : coords[1],
      "z" : coords[2]
    }
  }

  getPed = () => {
    return GetPlayerPed(GetPlayerIndex());
  }
}

const player = new Character();