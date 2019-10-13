<template>
<div>
  Title:<br> <input placeholder="Doing ACED Homework" v-model.trim="value.title" @input="update"><br>
  Tag:<br> <input placeholder="aced, groupStudy, problems" v-model.trim="value.tag" @input="update"><br>
  Description:<br> <textarea placeholder="Event description" v-model.trim="value.desc" @input="update"/><br>
</div>
</template>
g
<script>
export default {
    name: "EventForm",
    props: { value: { default: {title: "myTitle", tag: "myTag", desc: "myDesc"}}} ,
    methods: {
	update() {
	    this.$emit('input', this.value)
	}
    }
    
}
</script>

<style>

</style>
