var app = new Vue({
  el: '#app',
 components: {
  Teleport: Teleport
 },
  data: {
    menu: null
  },
  methods: {
    quitMenu: function() {
      $.post('http://admin/quitMenu', JSON.stringify({}))
      display = false;
      $("#app").hide();
    }
  }
});