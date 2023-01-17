const orderByEvenOrOdd = (nums) => {
    let even = [];
    let odd = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num % 2 === 0) even.push(num);
        else odd.push(num);
    }

    let orderedEven = even.sort((a, b) => a - b);
    let orderedOdd = odd.sort((a, b) => b - a);

    return orderedEven.concat(orderedOdd);
};

console.log(orderByEvenOrOdd([1, 45, 8, 3, 9, 31, 88, 56, 91, 37, 19, 18]));
