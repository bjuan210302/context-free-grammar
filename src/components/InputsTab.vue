<template>
  <div class="text-3xl p-3 font-semibold">Inputs</div>

      <div class="flex flex-col">

      
      <div class="flex flex-col md:flex-row gap-2 p-4">

        <div class="flex flex-col w-full">
          <div class="text-lg text-gray-600">Grammar</div>
          
          <textarea v-model="stringGrammar"
            class="w-full p-3 mt-2 font-mono"
            rows="5"
            placeholder="S -> AB | b ..."
          ></textarea>
        </div>

        <div class="flex flex-col">
          <div class="text-lg text-gray-600">Test string</div>
          
          <input  v-model='testString'
          type="text"
          class="w-full p-3 mt-2 font-mono"
          placeholder="string..."/>
          
          <button class="bg-custom-primary hover:bg-custom-primary-light
          text-white h-10 w-full rounded mt-2 
          transition-all duration-150 ease-out"
          @click="sendInfo">Test</button>
        </div>

        </div>

      </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    emits: ['sendInfo'],

    data(){
        return {
            stringGrammar: '',
            testString: ''
        }
    },

    methods: {
        sendInfo(){
            this.$emit('sendInfo', [this.stringGrammar, this.testString])
        }
    },


}
</script>

<style>
</style>