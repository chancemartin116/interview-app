/**
 * Get string for hash and number of letters
 * Runs in O(S^2) ?
 */
class HashApplicationProblem {
    static #CHARACTERS = "acdefgilnoprstuw";

    static printStringForHashAndNumberOfLetters(hash, numberOfLetters) {
        let currentVariation = HashApplicationProblem.#getFirstVariationForNumberOfLetters(numberOfLetters);
        for(let variationIndex = 0; variationIndex < currentVariation.length; variationIndex++) {
            for(let charactersIndex = 0; charactersIndex < HashApplicationProblem.#CHARACTERS.length; charactersIndex++) {
                currentVariation[variationIndex] = HashApplicationProblem.#CHARACTERS[charactersIndex]
                let currentString = currentVariation.join("")
                let currentHash = HashApplicationProblem.#getHashForString(currentString);
                if (currentHash === hash) {
                    console.log(currentString);
                    return;
                } else if (currentHash > hash) {
                    currentVariation[variationIndex] = HashApplicationProblem.#CHARACTERS[charactersIndex - 1];
                    break;
                }                 
            }    
        }
    }

    static #getFirstVariationForNumberOfLetters(numberOfLetters) {
        let firstVariation = [];
        for(let i = 0; i < numberOfLetters; i++) {
            firstVariation.push(HashApplicationProblem.#CHARACTERS[0]);
        }
        return firstVariation;
    }

    static #getHashForString(s) {
        let h = 7n;
        for(var i = 0; i < s.length; i++) {
            h = h * 37n + BigInt(HashApplicationProblem.#CHARACTERS.indexOf(s.charAt(i)));
        }
        return h;
    }
}

HashApplicationProblem.printStringForHashAndNumberOfLetters(BigInt(process.argv[2]), process.argv[3])