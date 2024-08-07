/*Stacks
LIFO
fucntions: push, pop, peek, length
*/

var letters = []; //this is the stack

var word = "racecar"
// var word = "max"

var rword = ""

// put letters of word into stack
for(var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
// console.log(letters)

// pop the stack off in reverse order
for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}
// console.log(rword)

if(rword === word){
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome")
}

//Creates a stack
var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Returns number of items in the stack
    this.size = function() {
        return this.count;
    }

    //Returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
myStack.push("Celtics");
myStack.push("Lakers");
// console.log(myStack.storage)
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("lakers");
myStack.push(18);
myStack.push(17);
console.log(myStack.storage)
console.log(myStack.peek());
console.log(myStack.size());


