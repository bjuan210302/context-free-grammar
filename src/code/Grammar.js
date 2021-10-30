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

    CYKAlgorithm(testString){
        for (let j = 2; j <= testString.length; j++) {
            for (let i = 1; i < (testString.length-j+1); i++) {
                var tuples = {}

                for (let k = 0; k <= j-1; k++) {
                    const p = this.outputMatrix[i-1][k-1]
                    const p2 = this.outputMatrix[(i-1)+(k)][(j-1)-(k)]
                    //TODO: cartesian prod of p and p2
                }
                
            }
        }
    }
    
}