const Coords = Vue.component('coords', {
  data: function () {
    return {
      x: 1,
      y: 2,
      z: 3
    }
  },
  mounted: function() {
    setInterval(() => {
      $.post('http://admin/getCoords',JSON.stringify({}));
    }, 500);
    window.addEventListener('message', (event) => {
      if(event.data.type === "coords") {
        const { x, y, z} = event.data.data;
        this.x = x;
        this.y = y;
        this.z = z;
      }
    })
  },
  template: `
    <div>
      <p class="coords">{{x}}</p>
      <p class="coords">{{y}}</p>
      <p class="coords">{{z}}</p>
    </div>
  `
});