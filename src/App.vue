<template>
  <div class="flex flex-col items-center h-screen bg-custom-bg">

    <div class="flex flex-col m-10 w-full sm:w-7/12 items-center">

      <div class="
      text-md font-mono font-extrabold tracking-widest
      bg-custom-tab sm:rounded-md
      self-start my-2 p-1">
        > Context free grammar</div>

        <div class="flex flex-col w-full shadow-2xl">
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
