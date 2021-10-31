import { createStore } from 'vuex'
import { parseGrammarInput } from '../code/Parser.js'
import { Grammar } from '../code/Grammar.js'

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
      const parsedGrammar = parseGrammarInput(state.stringGrammar)
      const grammar = new Grammar(parsedGrammar)

      grammar.generates(state.testString)
    }
  },
  actions: {
  },
  modules: {
  }
})
