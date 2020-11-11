/*
*For a given string, find all palindromes in that string. A palindrome is a string that’s the same backwards and forwards

	“ababba”
	O (n^2)
	* a ab aba abab ababb ababba
	* b ba bab babb babba
	* a ab abb abba
	* b bb bba
	* b ba
	* a

	A, b, aba, bb, abba, bab

*
* */

function palindrome(S) {
  let auxS = S, auxS2 = '';
  let result = 0;
  for(let i =0 ; i< S.length; i++) {
    auxS = auxS.slice(i, S.length - 1);
    for(let j = 0 ; j< auxS.length; j++) {
      auxS2= auxS.slice(0, j);
      if (auxS2[j] === auxS2[auxS.length]){
        result++;
      }
    }
  }
  return result;
}

console.log(palindrome('ababba')) // 6
