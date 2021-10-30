class Grammar{
    constructor(grammar){
        this.grammar = grammar
        this.grammarVariables = Object.keys(grammar)
        this.outputMatrix = [[]]
    }

    calcFirstColumn(testString){
        for (let i = 0; i < testString.length; i++) {
            let vars = [] //Vars that produce the i'th terminal of testString
            let terminal = testString[i]

            this.grammarVariables.forEach(variable => {
                var varProducesTerminal = this.grammar.variable.includes(terminal)

                if(varProducesTerminal) {
                    vars.push(variable)
                }
            });
            
            this.outputMatrix[j][0] = vars

        }
    }
    
}