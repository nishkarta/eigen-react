function reverseString(string) {
    let reversed = string.split('').reverse().join('');

    return reversed;
}

console.log(reverseString('ABCD'))
