var app = new Vue({
  el: '#app',
 components: {
  Teleport: Teleport,
  Entity: Entity,
  Weapon: Weapon,
  Scenario: Scenario
 },
  data: {
    menu: null
  },
  methods: {
    quitMenu: function() {
      $.post('http://admin/quitMenu', JSON.stringify({}));
      display = false;
      $("#app").hide();
    }
  }
});

Vue.component('vue-multiselect', window.VueMultiselect.default);