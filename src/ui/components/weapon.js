const Weapon = Vue.component('weapon', {
  data: function () {
    return {
      weapons: weapons,
      selectedWeapon: null,
      ammo: 20
    }
  },
  methods: {
    createweapon: function() {
      $.post('http://admin/giveWeapon', JSON.stringify({
        weapon: this.selectedWeapon,
        ammo: this.ammo
      }));
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="weapon" class="adminTeleport-label">Armes</label>
      <div class="adminSelect">
        <vue-multiselect label="asset" selectLabel="" deselectLabel="" selectedLabel="" v-model="selectedWeapon" placeholder="click for search" :options="weapons"></vue-multiselect>
      </div>
      <label class="mt-2 adminTeleport-label" >Munitions</label>
      <input type="text" class="full-input" placeholder="0" v-model="ammo">
      <button class="button-control" v-on:click="createweapon" :disabled="!selectedWeapon">Récupérer l'arme</button>
    </div>
  `
});