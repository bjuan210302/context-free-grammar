export class Grammar{
    constructor(grammar){
        this.grammar = grammar
        this.grammarVariables = Object.keys(grammar)
        this.outputMatrix = []
    }

    getOutputMatrix(){
        return this.outputMatrix
    }

    generates(testString){
        this.outputMatrix = Array(testString.length).fill().map(()=>Array(testString.length).fill())
        // console.log('first row');
        this.calcFirstColumn(testString)
        // console.log(JSON.stringify(this.outputMatrix, null, '\t'));

        // console.log('CYK Algo');
        this.CYKAlgorithm(testString)
        // console.log('OUTPUT');
        // console.log(JSON.stringify(this.outputMatrix, null, '\t'));

        const isGenerated = this.outputMatrix[0][ this.outputMatrix[0].length-1 ].includes('S')
        return [isGenerated, this.outputMatrix]
    }

    calcFirstColumn(testString){
        
        for (let i = 0; i < testString.length; i++) {
            let vars = [] //Vars that produce the i'th terminal of testString
            let terminal = testString[i]

            this.grammarVariables.forEach(variable => {
                
                var varProducesTerminal = this.grammar[variable].includes(terminal)

                if(varProducesTerminal) {
                    vars.push(variable)
                }
            });

            this.outputMatrix[i][0] = vars

        }
    }

    CYKAlgorithm(testString){
        for (let j = 2; j <= testString.length; j++) {
            for (let i = 1; i <= (testString.length-j+1); i++) {
                var potentialProductions = []

                for (let k = 1; k <= j-1; k++) {
                    const p = this.outputMatrix[i-1][k-1]
                    const p2 = this.outputMatrix[(i-1)+(k)][(j-1)-(k)]

                    var cartesian = this.cartesianProduct(p, p2)
                    potentialProductions = potentialProductions.concat(cartesian)
                    
                }
                
                this.outputMatrix[i-1][j-1] = this.calcVarsThatGenerate(potentialProductions)

                
            }
        }
    }

    cartesianProduct(arr1, arr2){
        const out = []

        for(let i = 0; i < arr1.length; i++){

           for(let j = 0; j < arr2.length; j++){
              out.push(
                 arr1[i].concat(arr2[j])
              )
           }
        }

        return out
    }

    calcVarsThatGenerate(productions){
        let outputVars = []
        
        productions.forEach(production => {
            
            this.grammarVariables.forEach(variable => {
                var varGeneratesProduction = this.grammar[variable].includes(production)

                if(varGeneratesProduction){
                    outputVars.push(variable)
                }

            });

        });

        return outputVars
    }
    
}