function matches(input = [], query = []) {
    var outArray = [];

    let count = 0;
    for (let i = 0; i < query.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (query[i] === input[j]) {
                count++;
            }
        }
        outArray.push(count)
        count = 0
    }
    return outArray
}

console.log(matches(['abc', 'cde', 'cde', 'efg', 'hij'], ['abc', 'cde', 'xyz']))
