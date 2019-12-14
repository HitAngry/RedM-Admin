const Entity = Vue.component('entity', {
  data: function () {
    return {
      entities: entities,
      selectedEntity: null
    }
  },
  methods: {
    createEntity: function() {
      $.post('http://admin/createPed', JSON.stringify(this.selectedEntity));
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="entity" class="adminTeleport-label">Entitées</label>
      <div class="adminSelect">
        <vue-multiselect
          v-model="selectedEntity"
          :options="entities"
          :show-labels="false"
        ></vue-multiselect>
      </div>
      <button class="button-control" v-on:click="createEntity" :disabled="!selectedEntity">Créer l'entitée</button>
    </div>
  `
});