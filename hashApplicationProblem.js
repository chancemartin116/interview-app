const CHARACTERS = "acdefgilnoprstuw";
var hash = parseInt(process.argv[2]);
var numberOfLetters = parseInt(process.argv[3]);
var output = new Array(numberOfLetters);
printStringForHashAndNumberOfLetters(output, hash, numberOfLetters);

function printStringForHashAndNumberOfLetters(output, hash, numberOfLetters) {
    if (numberOfLetters === 0) {
        var str = output.join("")
        if (getHashForString(str) === hash) {
            console.log(str);
            return;
        }
    } else {
        for(var i = 0; i < CHARACTERS.length; i++) {
            output.push(CHARACTERS.charAt(i));
            printStringForHashAndNumberOfLetters(output, hash, numberOfLetters - 1);
            output.pop();
        }
    }
}

function getHashForString(s) {
    var h = 7;
    for(var i = 0; i < s.length; i++) {
        h = h * 37 + CHARACTERS.indexOf(s.charAt(i));
    }
    return h;
}