<template>
 

  <div id="app">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
     <!--  <nav class="main-nav"> -->
      
      <Burger></Burger>
   <!--  </nav> -->

    <Sidebar>
      <ul class="sidebar-panel-nav">S
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Sidebar>
  </div> 
</template>

<script>
 import Burger from "./components/Menu/Burger";
import Sidebar from "./components/Menu/Sidebar"; 
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "app",
  components: { LMap, LTileLayer, LMarker, Burger, Sidebar },
  data() {
    return {
      zoom:13,
      center: latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(47.413220, -1.219482),
    }
  }
}
</script>
<style>

html, body, #app {
  height: 100%;
  margin: 0;
}

/* html {
  height: 100%;
  overflow: hidden;
}*/

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
