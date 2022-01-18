const CHARACTERS = "acdefgilnoprstuw";
var hash = 1317985395605002507n; // westernista
//hash = 934605031880300n; // leapfrogs
//hash = 677842960118n; // gleeful
printStringForHashAndCount(hash, 11);

function printStringForHashAndCount(hash, count) {
    let currentVariation = getFirstVariationForCount(count);
    for(let variationIndex = 0; variationIndex < currentVariation.length; variationIndex++) {
        for(let charactersIndex = 0; charactersIndex < CHARACTERS.length; charactersIndex++) {
            currentVariation[variationIndex] = CHARACTERS[charactersIndex]
            let currentString = currentVariation.join("")
            let currentHash = getHashForString(currentString);
            if (currentHash === hash) {
                console.log(currentString);
                return;
            } else if (currentHash > hash) {
                currentVariation[variationIndex] = CHARACTERS[charactersIndex - 1];
                break;
            }                 
        }    
    }
}

function getFirstVariationForCount(count) {
    let firstVariation = [];
    for(let i = 0; i < count; i++) {
        firstVariation.push(CHARACTERS[0]);
    }
    return firstVariation;
}

function getHashForString(s) {
    let h = 7n;
    for(var i = 0; i < s.length; i++) {
        h = h * 37n + BigInt(CHARACTERS.indexOf(s.charAt(i)));
    }
    return h;
}
