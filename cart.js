///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.map(elem => elem['price']).reduce((acc, curr) => acc + curr);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) =>(cartTotal * (tax + 1)).toFixed(2) - couponValue;
console.log(calcFinalPrice(87, 5, .07));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name(string) - Makes it easy to find customer after completing order if take out. Everyone I know doesnt have numbers as their name so a string seemed to be the right choice
    address(string) -If it is for delivery would want to know address to deliver to. Must be a string since addresses arent made of just numbers.
    delivery(bool) -This will tell the restaurant whether the cutomer is picking up or delivering. I use bool since delivery can only ever be true or false
    time(string) - Want to know what time the order is placed. it is a string so can easily display time like 5:00 pm
    order(array of strings) - The restaurant need to know what the customer ordered
                            It is an array so that you can show all the different thigns that were ordered
    price(number) - Want to know how much the order costs when it comes time to pay. I chose number because the price is just a numerical value.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const costumer = {
    name : 'customer',
    address : '123 main st, city, state, 12345',
    delivery : true,
    time : '7:00 pm', 
    order: ['burger', 'fries'],
    price: 6.99,
};