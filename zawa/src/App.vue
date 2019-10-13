<template>
  <div id="app">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        
        v-for="marker in events"
        :key="marker.id"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :lat-lng.sync="marker.position"
        :icon="marker.icon"
        @click="alert(marker.title, marker.desc)"
      >
        <l-popup>
          <div @click="innerClick">
            
          </div>
        </l-popup>
        <l-tooltip :content="marker.tooltip" />
      </l-marker>
    </l-map>
    <modal @cancel="modalOpen=false"  @ok="addMarker(eventTitle, eventTag, eventDescription); modalOpen=false" v-if="modalOpen">
      <template v-slot:header>
        <h3>Create Event</h3>
      </template>
      Title:<br> <input v-model="eventTitle"><br>
      Tag:<br> <input v-model="eventTag"><br>
      Description:<br> <input v-model="eventDescription"><br>
    </modal>
    <!--  <nav class="main-nav"> -->

    <Burger></Burger>
    <!--  </nav> -->

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <a href="#about" @click="modalOpen=true">Create Event</a>
        </li>
        <li>
          <a href="#contact">Remove Event</a>
        </li>
        <li>
          <a href="#contact">Edit Event</a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger";
import Sidebar from "./components/Menu/Sidebar";
import Modal from "./components/Modal.vue"
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup} from "vue2-leaflet";

export default {
  name: "app",
  components: { LMap, LTileLayer, LMarker, LPopup, Burger, Sidebar, Modal},
  data() {
    return {
      zoom:40,
      center: latLng(38.73743, -9.3032147),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      events : [],
      modalOpen: false,
      eventTitle: "",
      eventTag: "",
      eventDescription: ""
    }
  },
  methods: {
    alert(title, desc) {
      alert(title + "\n" + desc);
    },
    addMarker(eventTitle, eventTag, eventDescription) {
      const newMarker = {
        position: { lat: 38.73743, lng: -9.3032147},
        draggable: true,
        visible: true,
        title: eventTitle,
        desc: eventDescription,
        tag: eventTag
      };
      this.events.push(newMarker);
    },
    editMarker() {
      this.events.push(newMarker);
    },
    innerClick() {
      alert("Click!");
    }
}
}
</script>
<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

</style>
