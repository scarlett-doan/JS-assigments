/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

// const printNum = () => {
//     for (let i = 0; i <= 100; i++) {
//         setTimeout(() => console.log(i), 1000)
//     }
// }
//
// printNum()

/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has several dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

// let myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
// const fixDate = (array) => {
//     const temp = [];
//     array.forEach((item) => {
//         let dateItem = item.split("-");
//         dateItem.sort(function(a,b) {return a-b});
//         let correct = [dateItem[1], dateItem[0], dateItem[2]];
//         temp.push(correct.join("-"));
//     });
//     return temp;
// }
// let newArr = fixDate(myArr)
// console.log(newArr);

/*
3. Counter function
Write a counter function to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
// const dateFrom = new Date(500000)
// const dateTo = new Date(1000000000)
// const counter = (from, to) => {
//     let dif = new Date (to - from)
//     const day = dif.getDay()
//     console.log(day);
//
//     const days = Math.floor(dif/(1000*60*60*24));
//     dif -= days * (1000*60*60*24);
//     const hours = Math.floor(dif/(1000*60*60));
//     dif -= hours * (1000*60*60);
//     const min = Math.floor(dif/(1000*60));
//     dif -= min * (1000*60);
//     const sec = Math.floor(dif/1000);
//
//     return `${days} days - ${hours} hours - ${min} minutes - ${sec} seconds`;
// }
// const timer = counter(dateFrom, dateTo)
// console.log(timer)

/* 
4. Check the url and read documentation: https://restcountries.com
- Write a function to get all countries, sorted in alphabetical order
- Write a function to find one country based on the search input
The data fetched from url should be displayed in index.html.
*/

const getAllCountries = async () => {
    return await fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            const names = []
            for (const country of data) {
                names.push(country.name.common);
            }
            names.sort();
            return names;
        });
}
const getSingleCountry = async (countryName) => {
    return await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => response.json())
        .then((data) => {
            const names = []
            for (const country of data) {
                names.push(country.name.common);
            }
            names.sort();
            return names;
        });
}


const getAllBtn = document.querySelector(".getAll");
const getSingle = document.querySelector(".getCountry");
const input = document.querySelector(".countryInput");
const searchResult = document.querySelector("#tbody");

getAllBtn.addEventListener("click", async (e) => {
    searchResult.innerHTML = "";
    const result = await getAllCountries();
    result.forEach((item,index)=>{
        let newRow = searchResult.insertRow();
        newRow.insertCell().appendChild(document.createTextNode(index+1));
        newRow.insertCell().appendChild(document.createTextNode(item));
    })
});

getSingle.addEventListener("click", async (e) => {
    searchResult.innerHTML = "";
    const countryName = input.value;
    const result = await getSingleCountry(countryName);
    result.forEach((item,index)=>{
        let newRow = searchResult.insertRow();
        newRow.insertCell().appendChild(document.createTextNode(index+1));
        newRow.insertCell().appendChild(document.createTextNode(item));
    })
});



/*
5. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

// const generateNewFolderName = (existingFolders) => {
//     if(!existingFolders.includes("New Folder")){
//         existingFolders.push("New Folder");
//     }
//     else{
//         let count = 1;
//         for (const existingFolder in existingFolders) {
//             if (!existingFolders.includes(`New Folder (${count})`)) {
//                 existingFolders.push(`New Folder (${count})`);
//             } else {
//                 count += 1;
//             }
//         }
//     }
// }
//
//  let folder = ["New Folder (1)", "Attachments"]
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']

/* 
6. Complete class Book:
- class Book should have 3 properties: title (read-only, must be a string but cannot be empty),
cost (private, must be positive number) and profit (private, positive number > 0 and =< 0.5)
(error should be thrown if data is not valid)
- give the logic to get book's price and profit separately.
- give the logics to increase and decrease the price with a certain amount 
- give the logic to calculate price based on cost and profit.
For example: cost 14, profit 0.3 => expected price is 20.

Complete class TaxableBook: 
- inherit Book, but have 1 more private parameter in the constructor: taxRate. 
- give the logic to calculate price with taxRate. For example: 
cost 14, profit 0.3 , tax 24% => expected price is 30.43
*/
// class Book {
//     _title
//     _cost
//     _profit
//     constructor(title, cost, profit) {
//         if(typeof title != "string"){
//             throw "Title must be string";
//         }else if (title === ""){
//             throw "Title cannot be empty";
//         }else{
//             this._title = title;
//         }
//
//         if (typeof cost != "number"){
//             throw "Cost must be number";
//         }else if (cost <= 0){
//             throw "Cost must be positive";
//         }else {
//             this._cost = cost;
//         }
//
//         if (typeof profit != "number"){
//             throw "Profit must be number";
//         }else if (profit < 0 || profit > 0.5){
//             throw "Profit must be >0 and <=0.5";
//         }else {
//             this._profit = profit;
//         }
//
//         this._price = this._cost/(1-this._profit);
//
//     };
//
//     getPrice(){
//         return `The selling price is ${this._price}`;
//     }
//
//     getProfit(){
//         this._profitAmount = this._price*this._profit;
//         return `Profit is ${this._profitAmount}`;
//     }
//
//     adjustPrice(amount){
//         if (typeof amount == "number") {
//             this._price += amount;
//         } else {
//             throw "Amount should be a number";
//         }
//     }
// }
//
// class TaxableBook extends Book{
//     _taxRate
//     constructor(title, cost, profit, taxRate) {
//         super(title, cost, profit);
//         if (typeof taxRate != "number"){
//             throw "taxRate must be number";
//         }else if (taxRate < 0){
//             throw "taxRate must be >=0";
//         }else {
//             this._taxRate = taxRate;
//         }
//         this._price = (this._cost / (1 - this._profit - (this._taxRate/100))).toFixed(2);
//     }
// }
//
// const book1 = new Book("The Power of Habits", 14, 0.3)
// console.log(book1.getPrice());
// console.log(book1.getProfit());
// book1.adjustPrice(-3);
// console.log("After adjust then", book1.getPrice());
//
// const book2 = new TaxableBook("The Power of Habits", 14, 0.3, 24)
// console.log("With tax rate,", book2.getPrice());
