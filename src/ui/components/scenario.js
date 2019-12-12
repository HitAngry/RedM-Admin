const Scenario = Vue.component('scenaio', {
  data: function () {
    return {
      scenarios: scenarios,
      scenaioSelected: null,
      scenarioDelay: 5000
    }
  },
  methods: {
    playScenario: function() {
      console.log(`PLAY SCENARIO ${this.scenaioSelected} ${this.scenarioDelay}`)
      $.post('http://admin/giveWeapon', JSON.stringify(this.selectedWeapon));
    }
  },
  template: `
  <div class="adminTeleport">
    <label for="entity">Animations</label>
    <div class="adminSelect">
      <vue-multiselect
        v-model="scenaioSelected"
        :options="scenarios"
        :show-labels="false"
      ></vue-multiselect>
    </div>
    <label class="mt-2">Durée de l'animation (ms)</label>
    <input type="text" class="full-input" v-model="scenarioDelay">
    <button class="button-control" v-on:click="playScenario" :disabled="!scenaioSelected">Jouer l'animation</button>
  </div>
  `
});