const Prop = Vue.component('prop', {
  data: function () {
    return {
      objects: objects,
      selectedObjets: null
    }
  },
  methods: {
    createProp: function() {
      $.post('http://admin/createObject', JSON.stringify(this.selectedObjets));
    }
  },
  template: `
    <div class="adminTeleport">
      <label for="entity" class="adminTeleport-label">Objets</label>
      <div class="adminSelect">
        <vue-multiselect
          v-model="selectedObjets"
          :options="objects"
          :show-labels="false"
        ></vue-multiselect>
      </div>
      <button class="button-control" v-on:click="createProp" :disabled="!selectedObjets">Créer l'object</button>
    </div>
  `
});