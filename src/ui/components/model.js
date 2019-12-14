const Model = Vue.component('model', {
  data: function () {
    return {
      models: entities,
      selectedModel: null
    }
  },
  methods: {
    changeModel: function() {
      $.post('http://admin/changeModel', JSON.stringify(this.selectedModel));
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="entity" class="adminTeleport-label">Modèles</label>
      <div class="adminSelect">
        <vue-multiselect
          v-model="selectedModel"
          :options="models"
          :show-labels="false"
        ></vue-multiselect>
      </div>
      <button class="button-control" v-on:click="changeModel" :disabled="!selectedModel">Changer de modèle</button>
    </div>
  `
});