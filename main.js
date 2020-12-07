let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];



//removing last string
console.log(secretMessage.length)
secretMessage.pop(); 
console.log(secretMessage.length)

//add 'to' 'Program' add the end
secretMessage.push("to", "Program");
console.log(secretMessage)

//find 'easily' and replace with 'right'
const index = secretMessage.findIndex(par => par === "easily"); 
secretMessage[index] = "right";
// or with splice
// secretMessage.splice(index, 1, "right");

//remove first index of can array
secretMessage.shift(); 

//add 'Programming' to the beginning of an array:
secretMessage.unshift("Programming");

//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know.
const arrIndexes = ["get", "right", "the", "first", "time,"]; 
const indexes = arrIndexes.map(item => secretMessage.findIndex(index => index === item));
console.log(indexes)
secretMessage.splice(indexes[0], indexes.length, "know");

//print as a string
const message = secretMessage.join(' ');
console.log(message)

