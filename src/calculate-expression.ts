export function calculateExpression(constants: number[], expression: string): number {


    let interpolatedExpression = expression;

    if (interpolatedExpression.indexOf("(") > -1) {
        const brackets = interpolatedExpression.substring(
            interpolatedExpression.indexOf("(") + 1,
            interpolatedExpression.lastIndexOf(")"));
        const calculatedBrackets = calculateExpression(
            constants, 
            brackets
        );
        interpolatedExpression = interpolatedExpression.replace(`(${brackets})`, `${calculatedBrackets}`);
    }

    let terms = interpolatedExpression.split(" ");


    if (terms.includes("*") && terms.length > 3) {
        const indexOfMultiply = terms.findIndex(term => term === "*");

        let exprCalcFirst = terms.slice(indexOfMultiply - 1, indexOfMultiply + 2).join(" ");
    
        const calculated = calculateExpression(
            constants, 
            exprCalcFirst
        );
    
    
        interpolatedExpression = interpolatedExpression.replace(`${exprCalcFirst}`, `${calculated}`);
        terms = interpolatedExpression.split(" ");
    }
    if (terms.includes("/") && terms.length > 3) {
        const indexOfMultiply = terms.findIndex(term => term === "/");

        let exprCalcFirst = terms.slice(indexOfMultiply - 1, indexOfMultiply + 2).join(" ");
    
        const calculated = calculateExpression(
            constants, 
            exprCalcFirst
        );
    
    
        interpolatedExpression = interpolatedExpression.replace(`${exprCalcFirst}`, `${calculated}`);
        terms = interpolatedExpression.split(" ");
    }

    if (terms.includes("*")){
        return convertIfNecessary(constants, terms[0]) * convertIfNecessary(constants, terms[2]);
    }
    if (terms.includes("/")){
        return convertIfNecessary(constants, terms[0]) / convertIfNecessary(constants, terms[2]);
    }

    let result = convertIfNecessary(constants, terms[0]);
    terms.forEach((term, index) => {
        if (index % 2 == 1){
            if (term === "+"){
                result += convertIfNecessary(constants, terms[index + 1]);
            }
            if (term === "-"){
                result -= convertIfNecessary(constants, terms[index + 1]);
            }
        }
    });

    return result;
}

function convertIfNecessary(constants: number[], thing: string | number): number {
    if (isNaN(+thing)){
        return getConstantForAlgebraicSymbol(constants, (thing) as string);
    }
    return +thing;
}

export function getConstantForAlgebraicSymbol(constants: number[], algebraicSymbol: string): number {
    switch (algebraicSymbol) {
        case "A":
            return constants[0];
        case "B":
            return constants[1];
        case "C":
            return constants[2];
        case "D":
            return constants[3];
        case "E":
            return constants[4];
        case "F":
            return constants[5];
        case "G":
            return constants[6];
        case "H":
            return constants[7];
        case "I":
            return constants[8];
        case "J":
            return constants[9];
        case "K":
            return constants[10];
        default:
            throw new Error(`Unknown algebraic symbol ${algebraicSymbol}`);
    }
}
