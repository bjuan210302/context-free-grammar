<template>
  <div class="flex flex-col items-center min-h-screen flex-nowrap bg-custom-bg">

    <div class="flex flex-col sm:m-2 lg:m-10 w-full sm:w-7/12 items-center">

      <div class="
      text-xs font-mono font-extrabold tracking-widest
      bg-custom-tab 
      w-full text-center py-3 px-3 pb-0
      sm:rounded-lg sm:my-2 sm:w-auto sm:text-left sm:py-1
      self-start">
         λ Context Free Grammar</div>

        <div class="flex flex-col w-full sm:shadow-2xl">
          <div class="flex flex-col w-full bg-custom-tab sm:rounded-t-md">
            <InputsTab @sendInfo="test($event)" ref="inputsTab"></InputsTab>
          </div>

          <CYKTable class="flex h-full w-full" ref="cykTable"></CYKTable>
      </div>
    </div>
      
  </div>

  
</template>

<script>
import CYKTable from "./components/CYKTable.vue";
import InputsTab from "./components/InputsTab.vue"

export default {
  name: "App",

  components: {
    CYKTable,
    InputsTab
  },

  data(){
    return {
      inputsChildRef: ''
    }
  },

  methods: {
    test(data) {
      var [stringGrammar, testString] = data
      this.$store.commit("setStringGrammar", stringGrammar);
      this.$store.commit("setTestString", testString);
      this.$store.commit("test");

      const outputs = this.$store.getters.outputs;

      this.$refs.cykTable.updateData(testString, outputs[0], outputs[1])
    },
  },
};
</script>

<style scoped>
</style>
