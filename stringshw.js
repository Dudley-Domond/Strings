// QUESTION 1: find if a user entered string is a palindrome or not 

  let prompt = require('prompt-sync')()

  let str = prompt(' enter a word ')

  let reverse=str.length-1

  let msg=''

      while(reverse>=0) 
{
      msg+=str.charAt(reverse)
      reverse--
}
  if (msg==str)
{
      console.log(str + ' is a palindrome')
}
  else
      console.log(str + ' is not a palindrome');



// QUESTION 2: Find how many letters, numbers, and special characters are in a user entered string

  let prompt= require('prompt-sync')()
  let word1= prompt(' enter a  word: ').toLowerCase()
    letters=0
    numbers=0
    spechars=0
      for (i=0; i<word1.length; i++)
{   
    
    if (word1.charCodeAt(i) >=97 && word1.charCodeAt(i) <=122)
    letters++
    
   
    else if (word1.charCodeAt(i) >=48 && word1.charCodeAt(i) <=57)
    numbers++


    else
    spechars++
}
console.log(letters);
console.log(numbers);



// QUESTION 3: Find how many times a user entered word occurs in given string

let prompt= require('prompt-sync')()        
let word = prompt(' Enter a phrase: ')    

   console.log() // Line-break
   const wordcount = word.match(/(\w+)/g).length;      
{
      console.log(wordcount + ' Times');      

}

// QUESTION 4: CALCULATOR IS CREATED IN HTML FILE AND DISPLAYS/ FUNCTIONAL IN BROWSER BUT NOT RESPONDING TO JAVA SCRIPT CODE IN HTML FILE

//BONUS QUESTION: Capitalize the first letter of each word in a given string (or user entered string/sentence)

const str = 'life is good';


const arr = str.split(" ");


    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
  
const str2 = arr.join(" ");
console.log(str2);
