const Scenario = Vue.component('scenario', {
  data: function () {
    return {
      scenarios: scenarios,
      scenaioSelected: null,
      scenarioDelay: 5000
    }
  },
  methods: {
    playScenario: function() {
      $.post('http://admin/startScenario', JSON.stringify({
        scenario: this.scenaioSelected,
        delay: this.scenarioDelay
      }));
    }
  },
  template: `
  <div class="adminTeleport">
    <label for="entity" class="adminTeleport-label">Animations</label>
    <div class="adminSelect">
      <vue-multiselect
        v-model="scenaioSelected"
        :options="scenarios"
        :show-labels="false"
      ></vue-multiselect>
    </div>
    <label class=" mt-2 adminTeleport-label">Durée de l'animation (ms)</label>
    <input type="text" class="full-input" v-model="scenarioDelay">
    <button class="button-control" v-on:click="playScenario" :disabled="!scenaioSelected">Jouer l'animation</button>
  </div>
  `
});