

//////Practice Array methods

// const inventors = [
//   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
//   { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
//   { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
//   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
//   { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
//   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
//   { first: "Max", last: "Planck", year: 1858, passed: 1947 },
//   { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
//   { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
//   { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
//   { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
//   { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
// ];





// Array.filter()
// 1. 1500'lü yıllarda doğanlar için mucitlerin listesini filtreleyin.
  
   // const inventors1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  // console.log(inventors1500s);



// Array.map()
// 2. Bize mucitlerin ad ve soyadlarından oluşan bir dizi verin.

// const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(inventorsNames);




// Array.sort()
// 3. Mucitleri doğum tarihine göre en yaşlıdan en küçüğe doğru sıralayın.

// const inventorsSortedByBirthdate = inventors.sort((a, b) => a.year - b.year);
// console.log(inventorsSortedByBirthdate);





// Array.reduce()
// 4. Bütün mucitler hep birlikte kaç yıl yaşadılar?


// const totalYearsLived = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
// console.log(totalYearsLived);



// Array.every()
// 5. Bütün mucitler en az 45 yıl mı yaşadılar?

// const allLivedAtLeast45 = inventors.every(inventor => inventor.passed - inventor.year >= 45);
// console.log(allLivedAtLeast45);






// Array.some()
// 6. En az bir mucit 45 yıl mı yaşadı?

// const atLeastOneLived45 = inventors.some(inventor => inventor.passed - inventor.year >= 45);
// console.log(atLeastOneLived45);






/////////   Alqoritm /////////////

////  generateNumber(2,10,3)

//   [2,5,8]


function generateNumber (a,b,c) {
 let result =[];
for (let i=a; i<=b; i+=c) {
    result.push(i)  
}
  return result;
}

  let val=generateNumber(2,10,3)
  console.log(val)
  





