const Coords = Vue.component('coords', {
  data: function () {
    return {
      coordsX: 0,
      coordsY: 0,
      coordsZ: 0,
      vectorX: 0,
      vectorY: 0,
      vectorZ: 0
    }
  },
  mounted: function() {
    setInterval(() => {
      $.post('http://admin/getCoords',JSON.stringify({}));
    }, 500);
    window.addEventListener('message', (event) => {
      if(event.data.type === "coords") {
        this.coordsX = event.data.data.coords.x;
        this.coordsY = event.data.data.coords.y;
        this.coordsZ = event.data.data.coords.z;
        this.vectorX = event.data.data.vector[0];
        this.vectorY = event.data.data.vector[1];
        this.vectorZ = event.data.data.vector[2];
      }
    })
  },
  template: `
    <div>
      <p class="coords">Coords X:Y:Z</p>
      <p class="coords">{{coordsX}}</p>
      <p class="coords">{{coordsY}}</p>
      <p class="coords">{{coordsZ}}</p>
      <p class="coords">Vector X:Y:Z</p>
      <p class="coords">{{vectorX}}</p>
      <p class="coords">{{vectorY}}</p>
      <p class="coords">{{vectorZ}}</p>
    </div>
  `
});