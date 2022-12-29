function subDiagonal(matrix = []) {
    let n = matrix[0].length

    let d1 = 0, d2 = 0
    for (let i = 0; i < n; i++) {
        d1 += matrix[i][i];
        d2 += matrix[i][n - i - 1]
    }

    return d1 - d2


}

console.log(subDiagonal([[1, 2, 0], [4, 5, 6], [7, 8, 9]]))
