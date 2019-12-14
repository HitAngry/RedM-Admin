var app = new Vue({
  el: '#app',
 components: {
  Teleport: Teleport,
  Entity: Entity,
  Weapon: Weapon,
  Scenario: Scenario,
  Prop: Prop,
 },
  data: {
    menu: null
  },
  methods: {
    quitMenu: function() {
      $.post('http://admin/leaveMenu', JSON.stringify({
        display: display
      }));
      $("#app").hide();
    }
  }
});

Vue.component('vue-multiselect', window.VueMultiselect.default);