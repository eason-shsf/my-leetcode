var rotate = function(matrix) {
    if (!matrix || matrix.length <= 1) {
        return matrix;
    }
    for (i = 0; i < Math.floor(matrix.length/2); i++) {
        for (let j = i; j < matrix.length - i - 1;j++) {
            const endIndex = matrix.length - i - 1
            let cache = matrix[i][j]
            matrix[i][j] = matrix[endIndex - (j-i)][i]
            matrix[endIndex - (j-i)][i] = matrix[endIndex][endIndex - (j-i)]
            matrix[endIndex][endIndex- (j-i)] = matrix[j][endIndex]
            matrix[j][endIndex] = cache
        }
    }
};