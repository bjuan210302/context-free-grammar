/**
 * 
 * @param {String with productions separated by a line jump} grammarInput 
 * @returns An object with the shape KEY: ['PROD', 'DUC', 'TIONS']
 */
export function parseGrammarInput(grammarInput){

    let productionsString = grammarInput.split(/\r?\n/)
    let productions = {}

    productionsString.forEach(production => {

        production = production.replace(/\s/g, '')
        let parts = production.split('->')
        
        productions[parts[0]] = parts[1].split('|')

    });

    return productions;
}