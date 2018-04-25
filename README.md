# FriendFinder
This app is similar to a dating app except that it is non-gender specific, and locates the closest matched friend in the database based on the answers to 10 simple survey questions. 

This node.js app uses the following packages:
1. body-parser
2. express
3. firebase

URL validation is accomplished by using regular expressions, but is not perfect, but acts as a reasonable filter. The current validation requires that the image link begins with "http", "https", or "www". The second character must be "." or ":". It also must contain ".net", 
".com", or ".org". The name validation is accomplished through the same regExp methods, which screen for numbers and special characters, as well as require that a space is found in the sting to confirm a first and last name.
