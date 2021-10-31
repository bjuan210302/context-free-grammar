<template>
  <div class="row">
    <div class="col-10">
      <label class="form-label">Grammar</label>
      <textarea class="form-control" ref="stringGrammar" rows="5">S -> AB|a
A -> BB|b
B -> BA|a</textarea>
      
      <input class="form-control" ref="testString" type="text" placeholder="Test string">

      <button type="submit" class="btn btn-primary col-12" @click="test">Test</button>

    </div>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  methods: {

    test(){
      this.$store.commit('setStringGrammar', this.$refs.stringGrammar.value)
      this.$store.commit('setTestString', this.$refs.testString.value)
      this.$store.commit('test')
    }

  }
}
</script>

<style>
</style>
