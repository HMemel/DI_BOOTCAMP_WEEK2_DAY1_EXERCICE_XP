// Exercise 1: Your Favorite Food

// Store your favorite food into a variable.
let favoriteFood = ["pasta", "rice", "bread" ,"fries"];

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
let favoriteMeal =["cheese" ,"milk" ,"coffee" ,"cassava"];

// Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat " + favoriteFood[2] + " with" + favoriteMeal[2])


// Exercice 2 : Series

// Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named that is equal to the number of series in the array.
let myWatchedSeriesLength = myWatchedSeries.length;

// Create a variable named , that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = myWatchedSeries.toString();

// Console.log a sentence using both of the variables created above
console.log("I watched"+" "+myWatchedSeriesLength+" "+"series :"+" "+ myWatchedSeries);

// Part II

// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2,1, "friends");

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Avengers");

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Prison Break");

// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);

// Finally, console.log the array, to see all the modifications you’ve made
console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter

// Store a celsius temperature into a variable.
let celsiusTemperature = 40;

// Convert it to fahrenheit and console.log .
const fahrenheitTemperature = ((celsius /5)*9) + 32;

//  Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

// What will be the outcome of in the first expression ?a + b

console.log(a+b) //first expression
// Prediction: I will get 55, since I am adding two numbers.
// Actual:55

// What will be the outcome of in the second expression ?a + b

a = 2;
console.log(a+b) //second expression
// Prediction: I get 23, because the value of 'a' has changed 
// Actual:23

// What is the value of ?c

console.log(c) // third expression
// Prediction: 'c' to undefined, because it has no default value
// Actual:undefined

// Analyse the code below, what will be the outcome?

console.log(3 + 4 + '5'); // fourth expression
// Prediction: I get 75, since it considers 3 and 4 as numbers and 5 as a string, it will first sum 3 and 4 and then paste the 5 to the result found.
// Actual:75

// Exercise 5 : Guess The Answers #2

// What is the output of each of the expressions below?

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction: greeting
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction: I get 'hamburgers' because it does an operation between two strings.
// Actual:'hamburgers

"1" + "3"
// Prediction: I get '13' because the two elements are of the same type.
// Actual:13

"1" - "3"
// Prediction: I get '-2' because the two elements are of the same type.
// Actual:

"johnny" + 5
// Prediction:I get 'johnny5' because it concatenates a string with a number element 
// Actual:'johnny5'

"johnny" - 5
// Prediction:I get NaN because one of the elements is not of type number to use a number claculus operator
// Actual:NaN

99 * "hello"
// Prediction:I get NaN because one of the elements is not of type number to use a number claculus operator
// Actual:NaN

1 != 1
// Prediction:I get false, because 1 is not different from 1 itself 
// Actual: false

1 == "1"
// Prediction:I get true, because the two values are equal
// Actual: true

1 === "1"
// Prediction: I get false, because the two elements are of different types
// Actual:false

// Exercise 6 : Guess The Answers #3

// What is the output of each of the expressions below?

5 + "34"
// Prediction: I get "534" because it considers them as chains of carateres and makes a concatenation
// Actual: 534

5 - "4"
// Prediction: I get "1" because it checks the different types and sees that they are numbers so it performs the action of the operator
// Actual: 1

10 % 5
// Prediction: I get "0" because the remainder of the eclidean division of 10 by 5 is 0
// Actual: 0

5 % 10
// Prediction: I get "5" because the remainder of the eclidean division is 5
// Actual: 5

"Java" + "Script"
// Prediction:I get 'JavaScript' because it concatenates the value of the two strings
// Actual:JavaScript

" " + " "
// Prediction: I get '  ' because it concatenates the spaces that are carateres
// Actual: ' '

" " + 0
// Prediction:I get ' 0' because it concatenates the space to 0
// Actual:' 0'

true + true
// Prediction: I get "2" because the value of true is "1", so it adds them up.
// Actual: 2

true + false 
// Prediction: I get "1" because the value of true is "1" and the value of false is "0", so it adds them up
// Actual: 1

false + true
// Prediction: I get "1" because the value of false is "0" and the value of true is "1", so it adds them up
// Actual: 1

false - true
// Prediction: I get "-1" because the value of true is "1" and that of false is "0", so the operation gives a negative number
// Actual:-1

!true
// Prediction: I get "false" because the "!" symbol indicates the opposite of the variable
// Actual:false

3 - 4
// Prediction: I get "-1" because they are both of type number so it applies the operator
// Actual:-1

"Bob" - "bill"
// Prediction:I get "NaN" because both are of type string so this operator does not apply to them
// Actual:NaN