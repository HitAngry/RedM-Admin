const Entity = Vue.component('entity', {
  data: function () {
    return {
      entities: entities,
      selectedEntity: null
    }
  },
  methods: {
    createEntity: function() {
      console.log("CALL CREATE ENTITY " + this.selectedEntity)
      $.post('http://admin/createPed', JSON.stringify(this.selectedEntity));
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="entity">Entitées</label>
      <div class="adminSelect">
        <select name="places" id="entity" v-model="selectedEntity">
            <option v-for="(entity, index) in entities" :value="entity.model">{{entity.model}}</option>
        </select>
      </div>
      <button v-on:click="createEntity" :disabled="!selectedEntity">Créer l'entitée</button>
    </div>
  `
});