//Função anônima parametrizada
const f = function(v1, v2) {
    return v1 + v2
}
console.log(f(10,5))

//Função anônima com parâmetros Rest e For Of
const f1 = function(...valores) {
    let v = 0
    let res = 0
    for (v of valores) {
        res += v
    }
    return res
}
console.log(f1(20,5,6,9))