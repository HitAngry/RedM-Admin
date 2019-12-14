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
      $.post('http://admin/teleportplace', JSON.stringify(this.select.coords));
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
      <label for="place" class="adminTeleport-label">Lieux pré-enregistrer</label>
      <div class="adminSelect">
        <vue-multiselect label="name" selectLabel="" deselectLabel="" selectedLabel="" group-values="places" group-label="location" v-model="select" placeholder="click for search" :options="locations"></vue-multiselect>
      </div>
      <button class="button-control" v-on:click="applyTeleportPlace" :disabled="!select">Téléportation</button>
      <div class="blank2"></div>
      <label for="place" class="adminTeleport-label">Coordonnées personnalisées</label>
      <div class="adminMultiInput">
        <input type="text" placeholder="X" v-model="coords.x">
        <input type="text" placeholder="Y" v-model="coords.y">
        <input type="text" placeholder="Z" v-model="coords.z">
      </div>
      <button class="button-control" v-on:click="applyTeleportCustom" :disabled="!coords.x || !coords.y || !coords.z" >Téléportation</button>
    </div>
  `
});