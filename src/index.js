//  A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

test("Capitalize string", () => {
    const result = capitalize("tomado");

    expect(result).toBe("Tomado");
});

// A reverseString function that takes a string and returns it reversed.

function reverseString(str) {
    return str.split("").reverse().join("");
}

test("Reverse string", () => {
    expect(reverseString("julito")).toBe("otiluj");
});

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    substract: (a, b) => {
        return a > b ? a - b : b - a;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    },
};

test("Adding numbers", () => {
    expect(calculator.add(5, 5)).toBe(10);
});

test("Subtracting numbers", () => {
    expect(calculator.substract(5, 5)).toBe(0);
});

test("Multiplying numbers", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test("Division Test", () => {
    expect(calculator.divide(5, 5)).toBe(1);
});

//  Caesar Cypher
function caesarCypher(letters, shiftIndex) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const shiftedAlphabet =
        alphabet.slice(shiftIndex) + alphabet.slice(0, shiftIndex);

    let result = "";

    for (let i = 0; i < letters.length; i++) {
        const currentLetter = letters[i];

        if (currentLetter === currentLetter.toUpperCase()) {
            result +=
                shiftedAlphabet[
                    alphabet.indexOf(currentLetter.toLowerCase())
                ].toUpperCase();
        } else {
            result +=
                shiftedAlphabet[alphabet.indexOf(currentLetter.toLowerCase())];
        }
    }

    return result;
}

// alpha numeric

function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (
            !(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)
        ) {
            // lower alpha (a-z)
            return false;
        }
    }
    return true;
}

test("Shift cypher by 3", () => {
    const result = caesarCypher("xyz", 3);

    expect(result).toBe("abc");
});

test("Shift by 3 with case sensitive", () => {
    const result = caesarCypher("HeLLo", 3);

    expect(result).toBe("KhOOr");
});
