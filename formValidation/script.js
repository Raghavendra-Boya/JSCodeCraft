/*
WHat is Validation:
Validation in web development refers to the process of ensuring that user input meets certain criteria before it is processed or stored. This is crucial for maintaining data integrity, security, and providing a good user experience.


where:
1. login credentials
2. form submissions
3. data entry fields

Types of Validation:
1. basic validation
2. regex validation


2. regEx:
Regular expressions (RegEx) are sequences of characters that form a search pattern. They are used for pattern matching within strings, allowing developers to validate, search, and manipulate text based on specific criteria.

1. literals:
let pattern = /abc/;


2. Regex Constructor:
let pattern = new RegExp("abc");


Common Uses of RegEx in Validation:
1. Email Validation: Ensuring that an email address follows the standard format (e.g.,  
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
).
2. Password Strength: Checking if a password contains a mix of uppercase letters, lowercase letters, numbers, and special characters (e.g.,
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$


).

3. Phone Number Validation: Validating phone numbers to match specific formats (e.g.,   
^\+?[1-9]\d{1,14}$ for international numbers).


1. caret(^)  --> start of string
use cases:
1. username should start with a letter
2. email should start with a letter or number

2. dollar($) --> end of string
use cases:
1. file extension should be .com, .org, .net
2. password should end with a special character


3. dot(.) --> any single character
use cases:
1. username can have any character at specific position
2. domain name can have any character at specific position

meaning: matches any single character except newline characters.

4. asterisk(*) --> zero or more times
use cases:
1. middle name can be optional in full name
2. area code in phone number can be optional

5. plus(+) --> one or more times
use cases:
1. password should have at least one special character
2. domain name should have at least one subdomain

meaning: matches the preceding element one or more times.

6. question mark(?) --> zero or one time
use cases:
1. country code in phone number can be optional
2. middle initial in name can be optional
meaning: matches the preceding element zero or one time.

7. character sets([]) --> specific set of characters
use cases:
1. username can have only letters and numbers
2. hex color code should have only 0-9 and A-F characters
meaning: matches any one character from the specified set.

8. negated character sets([^]) --> exclude specific set of characters
use cases:
1. username should not have special characters
2. password should not have spaces
meaning: matches any one character not in the specified set.

9. ranges(-) --> specific range of characters
use cases:
1. age should be between 18-65
2. year should be between 1900-2099
meaning: matches any one character within the specified range.

10. digit(\d) --> any digit
use cases:
1. password should have at least one digit
2. phone number should have only digits
meaning: matches any single digit character (0-9).

11. non-digit(\D) --> any non-digit
use cases:
1. username should not have digits
2. special characters in password
meaning: matches any single character that is not a digit.

12. whitespace(\s) --> space, tab, newline
use cases:
1. password should not have whitespace
2. username should not have spaces
meaning: matches any whitespace character (space, tab, newline).

13. non-whitespace(\S) --> any non-whitespace
use cases:
1. username should not have spaces
2. password should not have spaces
meaning: matches any character that is not a whitespace character.

14. word character(\w) --> letters, digits, underscore
use cases:
1. username can have letters, digits, underscore
2. password can have letters, digits, underscore
meaning: matches any alphanumeric character (letters, digits) and underscore.

15. non-word character(\W) --> exclude letters, digits, underscore
use cases:
1. password should have special characters
2. username should not have special characters
meaning: matches any character that is not a word character.

16. quantifiers({n}, {n,}, {n,m}) --> specific number of times
use cases:
1. password should have at least 8 characters
2. username should be between 5 to 15 characters
meaning: specifies the exact number of times an element must occur.


*/
let caret = /^abc/;

console.log(caret.test("abccdd"));//true
console.log(caret.test("dabcdd"));//false
console.log(caret.test("acdc"));//false
console.log(caret.test("a"));

let dollar = /abc$/;
console.log(dollar.test("ddabc"));//true
console.log(dollar.test("ddab"));//false
console.log(dollar.test("abcdd"));//false
console.log(dollar.test("c"));//false

let dot = /a.c/;
console.log(dot.test("abc"));//true
console.log(dot.test("a c"));//true
console.log(dot.test("ac"));//false
console.log(dot.test("abbc"));//false
console.log(dot.test("a\nc"));//false

let asterisk = /go*gle/;
console.log(asterisk.test("ggle"));//true
console.log(asterisk.test("gogle"));//true
console.log(asterisk.test("google"));//true
console.log(asterisk.test("gooogle"));//true
console.log(asterisk.test("gogggle"));
console.log(asterisk.test("ggogle"));


let plus = /go+gle/;
console.log(plus.test("ggle"));//false
console.log(plus.test("gogle"));//true
console.log(plus.test("google"));
//true
console.log(plus.test("gooogle"));//true
console.log(plus.test("gogggle"));//false
console.log(plus.test("ggogle"));//false

let question = /colou?r/;
console.log(question.test("color"));//true
console.log(question.test("colour"));//true
console.log(question.test("colouur"));//false
console.log(question.test("colr"));//false
console.log(question.test("colouuur"));//false

let charSet = /[a-c]/;
console.log(charSet.test("apple"));//true
console.log(charSet.test("dog"));//false
console.log(charSet.test("banana"));//true
console.log(charSet.test("grape"));//true
console.log(charSet.test("mango"));//true

let negatedCharSet = /[^a-c]/;
console.log(negatedCharSet.test("dog"));//true
console.log(negatedCharSet.test("apple"));//false
console.log(negatedCharSet.test("ad"));//true
console.log(negatedCharSet.test("ab"));//false
console.log(negatedCharSet.test("abc"));//false


let range = /[0-5]/;
console.log(range.test("7"));//false
console.log(range.test("3"));//true
console.log(range.test("9"));//false

let digit = /\d/;
console.log(digit.test("abc"));//false
console.log(digit.test("a1bc"));//true
console.log(digit.test("123"));//true
console.log(digit.test("!@#"));//false
console.log(digit.test(" "));//false

let nonDigit = /\D/;
console.log(nonDigit.test("abc"));//true    
console.log(nonDigit.test("a1bc"));//true
console.log(nonDigit.test("123"));//false
console.log(nonDigit.test("!@#"));//true


let whiteSpace = /\s/;
console.log(whiteSpace.test("hello"));//false
console.log(whiteSpace.test("hello world"));//true
console.log(whiteSpace.test(" "));//true
console.log(whiteSpace.test("hello\tworld"));//true
console.log(whiteSpace.test("hello\nworld"));//true

let nonWhiteSpace = /\S/;
console.log(nonWhiteSpace.test("hello"));//true
console.log(nonWhiteSpace.test(" "));//false
console.log(nonWhiteSpace.test("hello world"));//true

let wordChar = /\w/;
console.log(wordChar.test("hello"));//true
console.log(wordChar.test("hello_world"));//true
console.log(wordChar.test("123"));//true
console.log(wordChar.test("!@#"));//false
console.log(wordChar.test(" "));//false

let nonWordChar = /\W/;
console.log(nonWordChar.test("hello"));//false
console.log(nonWordChar.test("hello_world"));//false
console.log(nonWordChar.test("123"));//false
console.log(nonWordChar.test("!@#"));//true
console.log(nonWordChar.test(" "));//true

let quantifier = /a{2,4}/;
console.log(quantifier.test("a"));
console.log(quantifier.test("aa"));//true
console.log(quantifier.test("aaa"));//true
console.log(quantifier.test("aaaa"));//true
console.log(quantifier.test("aaaaa"));//false

let quantifierExact = /b{3}/;
console.log(quantifierExact.test("b"));//false
console.log(quantifierExact.test("bb"));//false
console.log(quantifierExact.test("bbb"));//true
console.log(quantifierExact.test("bbbb"));//false
console.log(quantifierExact.test("bbbbb"));//false

let quantifierMin = /c{2,}/;
console.log(quantifierMin.test("c"));//false
console.log(quantifierMin.test("cc"));//true
console.log(quantifierMin.test("ccc"));//true
console.log(quantifierMin.test("cccc"));//true
console.log(quantifierMin.test("ccccc"));//true