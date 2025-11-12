/*
What is Method:

    A method is a function that is associated with an object. In JavaScript, methods are functions that are properties of objects. They are used to perform actions on the data contained within the object or to manipulate the object itself.

    1. String Methods does't not change the original string, but returns a new string.
    Syntax:
    object.methodName(parameters);

    types of String Methods:
    1. Length:\
    The length property returns the number of characters in a string.
    Syntax:
    string.length;

    real time Use Cases:
    1. Validating user input (e.g., checking password length)

2. UpperCase():
The toUpperCase() method converts a string to uppercase letters.
Syntax:
string.toUpperCase();
Use Cases:
1. Standardizing user input (e.g., converting email addresses to uppercase for comparison)
3. LowerCase():
The toLowerCase() method converts a string to lowercase letters.
Syntax:
string.toLowerCase();
Use Cases:
1. Standardizing user input (e.g., converting usernames to lowercase for consistency)

4. toLocaleLowerCase():
The toLocaleLowerCase() method converts a string to lowercase letters, according to the host's current locale.
Syntax:
string.toLocaleLowerCase();
Use Cases:
1. Displaying text in a locale-specific format (e.g., for languages with special casing rules)

5. toLocaleUpperCase():
The toLocaleUpperCase() method converts a string to uppercase letters, according to the host's current locale.
Syntax:
string.toLocaleUpperCase();

6. at(index):

The at() method returns the character at the specified index in a string. It supports negative indexing, where -1 refers to the last character.
Syntax:
string.at(index);
UseCases:
1. Accessing specific characters in a string (e.g., getting the first or last character of a username)

7. charAt(index):
The charAt() method returns the character at the specified index in a string.
Syntax:
string.charAt(index);
Use Cases:
1. Accessing specific characters in a string (e.g., getting the first character of a name)

8. codeChartAt(index):
The codeChartAt() method returns the Unicode value of the character at the specified index in a string.
Syntax:
string.codeChartAt(index);

Use Cases:
1. Encoding and decoding text (e.g., converting characters to their Unicode values for data transmission)

9. trim():
The trim() method removes whitespace from both ends of a string.
Syntax:
string.trim();

10. slice(start, end):
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
Syntax:
string.slice(start, end);  //end(index-1 is included)
Use Cases:
1. Extracting substrings (e.g., getting the domain from an email address)

11. concat():
The concat() method combines two or more strings and returns a new string.
Syntax:
string1.concat(string2, string3, ...);

Use Cases:
1. Building dynamic strings (e.g., creating a full name from first and last names)

12. subString(start, end):
The substring() method extracts characters from a string between two specified indices and returns a new string.
Syntax:
string.substring(start, end); //end(index-1 is included)
Use Cases:
1. Extracting substrings (e.g., getting a portion of a URL or file path)

13. includes(String):
The includes() method checks if a string contains a specified substring and returns true or false.
Syntax:
string.includes(substring); 
Use Cases:  
1. Validating user input (e.g., checking if a password contains a special character)

14. indexOf(String):
The indexOf() method returns the index of the first occurrence of a specified substring in a string. If the substring is not found, it returns -1.
Syntax:
string.indexOf(substring);

Use Cases:
1. Searching within strings (e.g., finding the position of a keyword in a document)

lastIndexOf(String):
The lastIndexOf() method returns the index of the last occurrence of a specified substring in a string. If the substring is not found, it returns -1.
Syntax:
string.lastIndexOf(substring);
Use Cases:
1. Searching within strings (e.g., finding the last occurrence of a keyword in a document)

replace(oldSubstring, newSubstring):
The replace() method replaces the first occurrence of a specified substring with a new substring in a string.
Syntax:
string.replace(oldSubstring, newSubstring);
Use Cases:
1. Modifying text (e.g., replacing sensitive information in a document)

replaceAll(oldSubstring, newSubstring):

*/

let str = "aello, World!";
console.log(str.length); // returns 13

console.log(str.toUpperCase()); // returns "HELLO, WORLD!"
console.log(str.toLowerCase()); // returns "hello, world!"

console.log(str.toLocaleLowerCase()); // returns "hello, world!"
console.log(str.toLocaleUpperCase()); // returns "HELLO, WORLD!"

console.log(str.at(0)); // returns "H"
console.log(str.at(-1)); // returns "!"
console.log(str.at(13)); // returns undefined
console.log(str.charAt(0)); // returns "H"
console.log(str.charAt(12)); // returns "!"
console.log(str.charAt(-7));

console.log(str.charCodeAt(0));//
console.log(str.charCodeAt(12)); // returns 33
console.log(str.charCodeAt(0)); // returns NaN

let str2 = "   Hello,     World!   ";
console.log(str2.trim()); // returns "Hello, World!"
console.log(str2.trim()); // returns "Hello,     World!   "
console.log(str2.trimStart()); // returns "Hello,     World!   "
console.log(str2.trimEnd()); // returns "   Hello,     World!"

let str3 = "Hello, World!";
console.log(str3.slice(0, 5)); // returns "Hello"
console.log(str3.concat(" How are you?")); // returns "Hello, World! How are you?"

console.log(str3.substring(0, 5)); // returns "Hello"

console.log(str3.includes("World")); // returns true
console.log(str3.includes("world")); // returns false
console.log(str3.indexOf("JS")); // returns 2
console.log(str3.indexOf("l")); // returns 2
console.log(str3.lastIndexOf("l")); // returns 10

console.log(str3.replace("l", "L")); // returns "HeLlo, World!"
console.log(str3.replaceAll("l", "L"));// returns "HeLLo, WorLd!"
