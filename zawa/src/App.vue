<template>
  <div id="app">
    <l-map :zoom="zoom" :center="center" @update:center="centerUpdate">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-control class="zawa-branding">
	<img src="@/assets/logo.svg"/><br>
      </l-control>
      <l-marker
        
        v-for="marker in events"
        :key="marker.id"
        :visible="marker.visible"
        :draggable="marker.isNew"
        :lat-lng.sync="marker.position"
        :icon="marker.iconobj"
      >
        <l-popup>
          <div @click="innerClick">
            <h2>{{ marker.title }}</h2>
	    Tags: {{ marker.tag }}<br>
	    Description: <span style="white-space: pre-line;"> {{marker.desc}} </span>
          </div>
        </l-popup>
        <l-tooltip :content="marker.tooltip" />
      </l-marker>
    </l-map>
    <modal @cancel="modalOpen=false"  @ok="addMarker(newEvent); newEvent={}; modalOpen=false" v-if="modalOpen">
      <template v-slot:header>
        <h3>Create Event</h3>
      </template>
      <EventForm v-model:event="newEvent" :icons="icons"></EventForm>
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
import Modal from "./components/Modal.vue";
import EventForm from "./components/EventForm.vue";
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LControl, LTooltip} from "vue2-leaflet";

export default {
  name: "app",
  components: { LMap, LTileLayer, LMarker, LPopup, LControl, LTooltip, Burger, Sidebar, Modal, EventForm},
  data() {
    return {
      zoom:40,
      center: latLng(38.73743, -9.3032147),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      events : [],
      modalOpen: false,
      newEvent: {title: "", tag:"", desc:""},
	icons: [{name: "aeist", path: require("@/assets/aeist.png")}, {name: "n3e", path: require("@/assets/n3e.png")}, {name: "queer", path: require("@/assets/queer.png")}]
    }
  },
  methods: {
    alert(title, desc) {
      alert(title + "\n" + desc);
    },
    addMarker(newEvent) {
      const newMarker = {
        position: this.center,
        visible: true,
          isNew: true,
	  icon: newEvent.icon,
	  iconobj: icon({iconUrl: newEvent.icon.path, iconSize: [48, 48], iconAnchor: [24, 24]}),
        title: newEvent.title,
        desc: newEvent.desc,
          tag: newEvent.tag,
	  tooltip: newEvent.title
      };
	for(var marker of this.events) {
	    marker.isNew = false;
	}

      this.events.push(newMarker);
    },
    editMarker() {
      this.events.push(newMarker);
    },
    innerClick() {
      alert("Click!");
    },
      centerUpdate(center) {
	  this.center = center;
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
  font-family: "Lato";
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
  padding: 0.7em;
  border-radius: 0.5em;
  margin-bottom: 1em;
  background:  #130f90;
}

.zawa-branding > img {
    width: 5em;
    height: 5em;
    opacity: 0.8;
    animation-name: flip;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;

}

.zawa-branding.connecting > img {
    animation-name: pulseColor;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.zawa-branding.offline > img {
    filter: grayscale(70%);
}

@keyframes flip {
    0% { opacity: 0 }
    20% { transform: rotateY(180deg) rotateX(270deg); opacity: 0 }
    100% { transform: rotateY(720deg) rotateX(360deg) }
}

@keyframes pulseColor {
    0% { filter: grayscale(0%);}
    30% { filter: grayscale(70%);}
    70% { filter: grayscale(70%);}
    100% { filter: grayscale(0%);}
}
</style>
