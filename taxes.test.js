describe('calculateTaxes test', function () {
    it('should calculate lower-bracket taxes', function () {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
    });

    it('should calculate higher-bracket taxes', function () {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(80000)).toEqual(20000);
    });
})

function append(arr, val) {
    arr.push(val);
}

function appendPure(arr, val) {
    return [...arr, val]
}