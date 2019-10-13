<template>
<div>
  Title:<br> <input placeholder="Doing ACED Homework" v-model.trim="value.title" @input="update"><br>
  Tag:<br> <input placeholder="aced, groupStudy, problems" v-model.trim="value.tag" @input="update"><br>
  <img v-if="iconpath" class="icon" :src="iconpath"/>
  <b-dd id="dropdown-1" text="Pick Icon" class="m-md-2">
    <b-dropdown-item v-for="icon in icons"
		     @click="value.icon=icon; iconpath=icon.path">
      <img class="icon" :src="icon.path" />
    </b-dropdown-item>
  </b-dd><br>
  Description:<br> <textarea placeholder="Event description" v-model.trim="value.desc" @input="update"/><br>
</div>
</template>
g
<script>
export default {
    name: "EventForm",
    props: { value: { default: {title: "myTitle", tag: "myTag", desc: "myDesc"}},
	     icons: { default: [{name: "queer", path: "@/assets/queer.png"}]}} ,
    data() {return { iconpath: require("@/assets/aeist.png") }},
    methods: {
	update() {
	    this.$emit('input', this.value);
	},
	
	
    }
    
}
</script>

<style>
img.icon {
    width: 3em;
    height: 3em;
}
</style>
