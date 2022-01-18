const CHARACTERS = "acdefgilnoprstuw";
var hash = 1317985395605002507n; // westernista
//hash = 934605031880300n; // leapfrogs
//hash = 677842960118n; // gleeful
printStringForHashAndCount(hash, 11);

function printStringForHashAndCount(hash, count) {
    let start = [];
    for(let i = 0; i < count; i++) {
        start.push(CHARACTERS[0]);
    }
    let k = 0;
    let j = 0
    while (k < count) {
        j = 0;
        while(j < CHARACTERS.length) {
            start[k] = CHARACTERS[j]
            let string = start.join("")
            let currentHash = getHashForString(string);
            if (currentHash === hash) {
                console.log(string);
                return;
            } else if (currentHash > hash) {
                start[k] = CHARACTERS[j - 1];
                k++;
                j = 0;
            } else {
                j++;
            }
        }
        k++;
    }
}

function getHashForString(s) {
    let h = 7n;
    for(var i = 0; i < s.length; i++) {
        h = h * 37n + BigInt(CHARACTERS.indexOf(s.charAt(i)));
    }
    return h;
}

function printStringForHashAndNumberOfLetters(output, hash, numberOfLetters) {
    let str = output.join("")
    let currentHash = getHashForString(str)
    if (numberOfLetters === 0) {
        console.log(str);
        if (currentHash === hash) {
            console.log("here")
            return;
        }
    } else {
        for(let i = 0; i < CHARACTERS.length; i++) {
            output.push(CHARACTERS.charAt(i));
            printStringForHashAndNumberOfLetters(output, hash, numberOfLetters - 1);
            output.pop();
        }
    }
}