export function indianCurrency(amount: number): string {
    const strAmount = amount.toString();
    let lastThree = strAmount.substring(strAmount.length - 3);
    const otherNumbers = strAmount.substring(0, strAmount.length - 3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    const indCurrency = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return `₹ ${indCurrency}`;
}