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
