module.exports = function towelSort (matrix) {
    let sortedMatrix = [];
    if (!matrix || matrix.matrix < 1 ) return sortedMatrix;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) matrix[i].reverse();
        sortedMatrix = sortedMatrix.concat(matrix[i]);
    }
    return sortedMatrix;
}
