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

test("Substracting numbers", () => {
    expect(calculator.substract(5, 5)).toBe(0);
});
