const Teleport = Vue.component('teleport', {
  data: function () {
    return {
      select: null,
      coords: {
        x: null,
        y: null,
        z: null
      },
      locations: locations
    }
  },
  methods: {
    applyTeleportPlace: function() {
      let place = this.select.split(':');
      let coords = this.locations[place[0]].places[place[1]].coords;
      $.post('http://admin/teleportplace', JSON.stringify(coords));
      this.select = null;

    },
    applyTeleportCustom: function() {
      $.post('http://admin/teleportcustom', JSON.stringify(this.coords));
      this.coords = {
        x: null,
        y: null,
        z: null
      }
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="place">Lieux pré-enregistrer</label>
      <div class="adminSelect">
        <select name="places" id="place" v-model="select">
          <optgroup v-for="(location, indexLocation) in locations" :label="location.location">
            <option v-for="(place, indexPlace) in location.places" :value="indexLocation+':'+indexPlace">{{place.name}}</option>
          </optgroup>
        </select>
      </div>
      <button v-on:click="applyTeleportPlace" :disabled="!select">Téléportation</button>
      <div class="blank2"></div>
      <label for="place">Coordonnées personnalisées</label>
      <div class="adminMultiInput">
        <input type="text" placeholder="X" v-model="coords.x">
        <input type="text" placeholder="Y" v-model="coords.y">
        <input type="text" placeholder="Z" v-model="coords.z">
      </div>
      <button v-on:click="applyTeleportCustom" :disabled="!coords.x || !coords.y || !coords.z" >Téléportation</button>
    </div>
  `
});