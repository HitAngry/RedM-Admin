const Weapon = Vue.component('weapon', {
  data: function () {
    return {
      weapons: weapons,
      selectedWeapon: null
    }
  },
  methods: {
    createweapon: function() {
      console.log("CALL GIVE weapon " + this.selectedWeapon)
      $.post('http://admin/giveWeapon', JSON.stringify(this.selectedWeapon));
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="weapon">Armes</label>
      <div class="adminSelect">
        <select name="places" id="weapon" v-model="selectedWeapon">
            <option v-for="(weapon, index) in weapons" :value="weapon.asset">{{weapon.model}}</option>
        </select>
      </div>
      <button v-on:click="createweapon" :disabled="!selectedWeapon">Récupérer l'arme</button>
    </div>
  `
});