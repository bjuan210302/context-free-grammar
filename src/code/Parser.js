export function parseGrammarInput(grammarInput){

    let productionsString = grammarInput.split(/\r?\n/)
    let productions = {}

    productionsString.forEach(production => {

        production = production.replace(/\s/g, '')
        let parts = production.split('->')
        
        productions[parts[0]] = parts[1].split('|')

    });
    
    // console.log(JSON.stringify(productions, null, '\t'));

    return productions;
}