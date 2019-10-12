var { LMap, LTileLayer, LMarker } = Vue2Leaflet;


var app = new Vue({
  el: '#app',
  components: { LMap, LTileLayer, LMarker },
  data() {
    return {
      zoom:13,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  }
});

var botao = new Vue({
  el: '#botao',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }	
});
