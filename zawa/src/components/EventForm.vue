<template>
<div>
  Title:<br> <input placeholder="Doing ACED Homework" v-model.trim="value.title" @input="update"><br>
  Tag:<br> <input placeholder="aced, groupStudy, problems" v-model.trim="value.tag" @input="update"><br>
  Icon:   {{ ico }} <img v-if:value.icon class="icon" :src="ico"/>
  <b-dd id="dropdown-1" text="Pick Icon" class="m-md-2">
    <b-dropdown-item v-for="icon in icons"
		     @click="value.icon=icon">
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
    methods: {
	update() {
	    this.$emit('input', this.value)
	}
	,
	computed: {
	    ico(){ return value.icon ? value.icon.path : null}
	    }
    }
    
}
</script>

<style>
img.icon {
    width: 3em;
    height: 3em;
}
</style>
