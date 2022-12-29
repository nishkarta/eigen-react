function longest(sentence) {
    var strSplit = sentence.split(" ");

    var longestWord = "";

    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
        }
    }

    return longestWord;
}

console.log(longest('Aku adalah seorang manusiaaa'))

