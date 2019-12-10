var app = new Vue({
  el: '#app',
 components: {
  Teleport: Teleport,
  Entity: Entity,
  Weapon: Weapon,
  Scenario: Scenario,
  'v-select': VueSelect.VueSelect
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

Vue.component('v-select', VueSelect.VueSelect);