import { createStore } from 'vuex'
import { parseGrammarInput } from '../code/Parser.js'
import { Grammar } from '../code/Grammar.js'

export default createStore({
  state: {
    stringGrammar: '',
    testString: '',
    outputs: []
  },

  getters:{
    outputs(state){
      return state.outputs
    }
  },

  mutations: {
    setStringGrammar(state, value){
      state.stringGrammar = value
    },
    
    setTestString(state, value){
      state.testString = value
    },

    test(state){
      const parsedGrammar = parseGrammarInput(state.stringGrammar)
      const grammar = new Grammar(parsedGrammar)

      state.outputs = grammar.generates(state.testString)
    }
  },
  actions: {
  },
  modules: {
  }
})
