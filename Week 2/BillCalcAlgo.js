

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    

    let tip_sum = (tip_percent / 100 * meal_cost);
    
    let tax_sum = (tax_percent / 100 * meal_cost);

    let total = (tip_sum + tax_sum + meal_cost);
    
    

    return console.log(Math.round(total));

}

solve(12.00, 20, 8);

solve(123456, 23, 33);

console.log(parseFloat(4.00) + parseFloat(4.00));