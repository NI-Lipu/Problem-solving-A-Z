const Count_of_odd_numbers = (array: number[]): number => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
console.log(Count_of_odd_numbers([1, 2, 3, 4, 5]));
