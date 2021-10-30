<template>
  <div class="row">
    <div class="col-10">
      <label class="form-label">Grammar</label>
      <textarea class="form-control" ref="stringGrammar" rows="5">S -> e | x | a | m | p | l | e
A -> aA| Te| mPL| a |t| e
B -> lo|R e|m| iP</textarea>
      
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
      this.$store.commit('setTestString', this.$refs.testString)
      this.$store.commit('test')
    }

  }
}
</script>

<style>
</style>
