export class Grammar{
    constructor(grammar){
        this.grammar = grammar
        this.grammarVariables = Object.keys(grammar)
        this.outputMatrix = []
    }

    getOutputMatrix(){
        return this.outputMatrix
    }

    /**
     * 
     * @param {The string to see if it's generated by the grammar} testString 
     * @returns A tuple with a boolean and a matrix. The boolean indicates if the string is generated by the grammar.
     * The matrix is the output of the CYK algorithm
     */
    generates(testString){
        //Initialization of the output matrix (testString.length X testString.length)
        this.outputMatrix = Array(testString.length).fill().map(()=>Array(testString.length).fill())

        this.calcFirstColumn(testString)
        this.CYKAlgorithm(testString)

        const isGenerated = this.outputMatrix[0][ this.outputMatrix[0].length-1 ].includes('S')
        return [isGenerated, this.outputMatrix]
    }

    /**
     * Calculates the first row of the CYK algorithm (j=0) and stores it in this.outputMatrix
     * @param {The string to see if it's generated by the grammar} testString 
     */
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

    /**
     * Perfoms the CYK algorithm over testString and stores the results in this.outputMatrix
     * @param {The string to see if it's generated by the grammar} testString 
     */
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

    /**
     * 
     * @param {One dimentional array filled with strings} arr1 
     * @param {One dimentional array filled with strings} arr2 
     * @returns The cartesian prod. between arr1 and arr2
     */
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

    /**
     * 
     * @param {A list of productions} productions 
     * @returns The variables in this.grammarVariables that generate (at least one of) the productions passed
     */
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