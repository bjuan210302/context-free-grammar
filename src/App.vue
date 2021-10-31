<template>
  <div class="row">
    <div class="col-10">
      <label class="form-label">Grammar</label>
      <textarea class="form-control" ref="stringGrammar" rows="5">S -> AB|a
A -> BB|b
B -> BA|a</textarea>
      
      <input class="form-control" ref="testString" type="text" placeholder="Test string">

      <button type="submit" class="btn btn-primary col-12" @click="test">Test</button>

      <div class="row" ref="xdxd"></div>

    </div>
  </div>
  
  <div class="row">
    <div class="col-">
      
    </div>
  </div>
</template>

<script>
import CYKTable from './components/CYKTable.vue'
import { createApp } from 'vue'
import { defineComponent } from 'vue'
import store from './store'

export default {
  name: 'App',

  components: {
    CYKTable
  },

  methods: {

    test(){
      this.$store.commit('setStringGrammar', this.$refs.stringGrammar.value)
      this.$store.commit('setTestString', this.$refs.testString.value)
      this.$store.commit('test')

      const outputs = this.$store.getters.outputs

      this.mountTable(this.$refs.testString.value, outputs[1])
    },

    mountTable(strTest, outputMatrixParam){
      var componentInstance
      var componentDefinition = defineComponent({
        extends: defineComponent(CYKTable),

        data: () => ({
          testString: strTest,
          outputMatrix: outputMatrixParam
        }),

        created: function() { componentInstance = this.$root }
      });

      createApp(componentDefinition).mount(this.$refs.xdxd);
      console.log(componentInstance)
    }

  },

  mounted() {
    
    // this.$refs.container.appendChild(ProjectRowInstance.$el);
  }

}
</script>

<style>
</style>
