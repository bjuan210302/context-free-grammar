<template>
<div class="row align-items-center justify-content-center h-100">
  <div class="row justify-content-center">

      <div class="col-12 py-4">
        <div class="card">
          <div class="card-header">
            <h3>Inputs</h3>
          </div>
          <div class="card-body">
            <div class="input-group mb-3">
              <span class="input-group-text">Grammar</span>
              <textarea class="form-control" ref="stringGrammar" rows="8" placeholder="S -> AB | b"></textarea>
            </div>
            
            <div class="input-group mb-3">
              <span class="input-group-text">String to test</span>
              <input type="text" class="form-control" placeholder="string" ref="testString">
            </div>
            
            <button type="submit" class="btn btn-primary col-12" @click="test">Test</button>  
          </div>
        </div>
      </div>

    <div class="col-12 py-4" ref="xdxd"></div>

    

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

      this.mountTable(this.$refs.testString.value, outputs[0], outputs[1])
    },

    mountTable(strTest, isGeneratedParam, outputMatrixParam){
      var componentInstance
      var componentDefinition = defineComponent({
        extends: defineComponent(CYKTable),

        data: () => ({
          testString: strTest,
          isGenerated: isGeneratedParam,
          outputMatrix: outputMatrixParam
        }),

        created: function() { componentInstance = this.$root }
      });

      createApp(componentDefinition).mount(this.$refs.xdxd);
      console.log(componentInstance)
    }

  },

}
</script>

<style scoped>
  textarea{
    font-family: 'Courier New';
  }

  input{
    font-family: 'Courier New';
  }

</style>
