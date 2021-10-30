import { createStore } from 'vuex'
import { parseGrammarInput } from '../code/Parser.js'

export default createStore({
  state: {

    stringGrammar: '',
    testString: ''

  },

  mutations: {
    setStringGrammar(state, value){
      state.stringGrammar = value
    },
    
    setTestString(state, value){
      state.testString = value
    },

    test(state){
      parseGrammarInput(state.stringGrammar)
    }
  },
  actions: {
  },
  modules: {
  }
})
