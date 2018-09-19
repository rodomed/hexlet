// const smallestDivisor = (num) => {
// //   // BEGIN (write your solution here)
// 	var divisor = 2;
// 	if(num < 1) {
// 		return NaN;
// 	} else if(num % divisor == 0) {
// 		return divisor;
// 	} else {
// 		while (num % divisor != 0) {
// 			divisor = divisor + 1;
// 			if(divisor >= num / 2) {
// 				return num;
// 			} else if(num % divisor == 0) {
// 				return divisor;
// 			}
// 		}
// 	}
//   // END
// };


// const smallestDivisor = (num) => {
//   // BEGIN (write your solution here)
//   const iter = (num, divisor) => {
// 		if(num % divisor == 0) {
// 			return divisor;
// 		} else if (num % divisor != 0) {
// 			divisor += 1;
// 			if (divisor == num) {
// 				return num;
// 			} else {
// 			return iter(num, divisor);
// 	 		}
//   		}
// 	}
//  	return iter(num, 2);
//   // END
// };

// console.log(smallestDivisor(12589));

// const reverse = (str) => {
//   var strNew = "";
//   var count = str.length;
//   while(count > 0) {
//     strNew = strNew + str[count - 1];
//     count = count - 1;
//   }
//   return strNew;
// }
// console.log(reverse("qwertyttttttttttttttttt"));


// const sequenceSum = (begin, end) => {
//   if (begin > end) {
//    return NaN;
//  } else if(begin === end) {
//    return begin;
//  }  else {
//    return begin + sequenceSum(begin+1, end);
//  } 
// };
//  var Sum = sequenceSum(4, 10);
// console.log(Sum);


// const isPrime = (num) => {
// 	for (var i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			break;
// 		} else if(i == num - 1) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }

// const isPrime = (num) => {
//   if (num < 2) {
//     return false;
//   } else if (num === 2) {
//       return true;
//   } else if (num > 2) {
// 	  for (var i = 2; i < num; i += 1) {
// 		  if (num % i === 0) {
// 		  		break;
//     		} 
// 		} if(i < num) {
// 			return false;
// 		} else {
// 			return true
// 		}
//   }
// }


// const isPrime = (num) => {
//   	if(num < 2) {
// 		return false;
//   	} else if(num == 2) {
// 		return true;
//   	} else if(num > 2) {
// 	  	for (var i = 2; i <= num; i++) {
// 			if (num % i == 0) {
// 		  		break;
// 		} 	else if(i == num) {
// 			 	return true;
// 		} 
// 	}
// 	  	return false;
//   	} 
// }

// console.log(isPrime(2));


// const square = (n) => {return n * n;}
// const sumOfSquares = (a, b) => { return square(a) + square(b);}
// const squareSumOfSquares = (a, b) => {
// 	 return square(sumOfSquares(a, b));
// }

// console.log(sumOfSquares(3, 5));
// console.log(squareSumOfSquares(-3, 7));

// import { length, toUpperCase } from './strings';


// debugger;
// const length = str => str.length;
// const toUpperCase = str => str.toUpperCase();

// const bigLettersCount = (str) => {
//   // BEGIN (write your solution here)
//   let chars = 0;
//   for (let i = 0; i < length(str); i += 1) {
//     if (toUpperCase(str[i]) === str[i]) { 
//       chars += 1;
//     }
//   }
//   return chars;
//   // END
// };


//  const compare = (first, second) => {
//   const firstCount = bigLettersCount(first);
//   const secondCount = bigLettersCount(second);

//   // BEGIN (write your solution here)
//   if (firstCount > secondCount) {
//     return 1;
//   } else if (firstCount < secondCount) {
//     return -1;
//   } return 0; 
//   // END
// };

//  const greaterThan = (first, second) =>
//   console.log(compare(first, second) === 1);

//  const lessThan = (first, second) =>
//   console.log(compare(first, second) === -1);

//  const isEqual = (first, second) =>
//   console.log(compare(first, second) === 0);


// greaterThan('AD', 'ad sd');
// greaterThan('AD', 'Ad sd');
// greaterThan('az', 'ad');
// greaterThan('ASDF', 'QWER');


//  const addDigits = (num) => {
//   let numStr = String(num);
//   while(numStr.length > 1) {
//   		/*for (var i = 0; i < numStr.length; i++) {*/
//   			numStr = sum(numStr); 
//   		}
// 	// } 
// 	return Number(numStr);
// }


// const sum = numStr => {
//     let sumIndex = 0;
//     for(let i = 0; i < numStr.length; i++) {
//       sumIndex = sumIndex + (+(numStr[i]));
//     };
//    	return numStr = String(sumIndex);
// }

// // console.log(typeof sum("598997686567"));
// // console.log(typeof addDigits(9259524));
// console.log( addDigits(998));
// // console.log(typeof addDigits(998));
// // // console.log(typeof numSt);
// // console.log(addDigits(92595248));
// // console.log(addDigits(925952487));
// console.log(addDigits(9259524874) + "  ?!");
// console.log(addDigits(92595248745));
// console.log(addDigits(425952487458));
// console.log(addDigits(525952487458) + "  ?!!!!!!!!");
// console.log(addDigits(625952487458));
// console.log(addDigits(725952487458));
// console.log(addDigits(825952487458));
// console.log(addDigits(925952487458));
// console.log(addDigits(4259524874589) + "  ?!!!!!!");
// console.log(addDigits(9259524874589));
// console.log(addDigits(92595248745899));
// console.log(addDigits(92595248745899999));
// console.log(addDigits(925.952.487.458.991.238.785));

// // console.log("")
// // console.log(addDigits(598997686567));


//  const replace = (a, b, i) => {
//   if (a === a.toUpperCase()) {
//     return a;
//   } else if (a !== a.toUpperCase()) {
//   		if ( i === 0 || b === " " ) {
//   			return (a.toUpperCase());
//   		} else {
//   			return a;
//   		}
// 	}
// }


// const upFirstLetter = (str) => {
//   var newStr = "";
//   for (let i = 0; i < str.length; i +=1) {
//   	let a = str[i];
//   	let b = str[i - 1];
//     replace(a, b, i);
//     newStr += replace(a, b, i);
//   }
//   return newStr;
// }

// const replace = (a, b, i) => {
//   if (a === a.toUpperCase()) {
//     return a;
//   } else if (a !== a.toUpperCase()) {
//   		if ( i === 0 || b === " " ) {
//   			return (a.toUpperCase());
//   		} else {
//   			return a;
//   		}
//  //  	return a;
// 	}
// }

// console.log(upFirstLetter("mpk y ign k hm"));

// export default upFirstLetter;

 // const shouldBeBig = (str[i] !== ' ') && ((i === 0) || (str[i - 1] === ' '));