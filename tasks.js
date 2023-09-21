/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node words.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  let name = text.trim();
  let part = name.split(" ");
  let word = part[0];
  let added = part.slice(1).join(" ");

  if (word === "quit") {
    quit();
  } else if (word === "exit") {
    exit();
  } else if (word === "hello") {
    //console.log('hello')
    hello(added);
  } else if (word === "help") {
    help();
  } else if (word === "list") {
    list();
  } else if (word === "add") {
    add(added);
  } else if (word === "remove") {
    remove(added);
  } else if (word === "edit") {
    edit(added);
  } else if(word === "check"){
    check(added)
  }
   else {
    unknownCommand(text);
  }
  
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name == null || name == "" || name == undefined) {
    console.log("Hello!");
  } else {
    let empty = `hello ${name}!`;
    empty = empty.replace("\n", "");
    console.log(`${empty}`);
  }
}

let arr = [
  "exit to exiting",
  "say Hello",
  "say hello with name",
  "help to check list of commands",
  
];

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
function exit() {
  console.log("exiting now , goodbye!");
  process.exit();
}
// show me list of  possible commands (hello , exit , add , remove, show list  )
function help() {
  console.log(
    "'hello'\n'hello with name'\n'quit'\n'exit'\n'show list'\n'add to arr'\n'remove from arr'"
  );
}

function list() {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1 + "- " + arr[i]);
  }
}
// add element to arr
function add(ad) {
  if (ad === "") {
    console.log("error");
  } else {
    arr.push(s);
  }
  console.log(arr);
}
// remove element from arr
function remove(rem) {
  for (let i = 0; i < arr.length; i++) {
    if (rem === undefined) {
      // check if  remove only => delete last element
      arr.pop();
    } else if (rem - 1 !== i) {
      console.log("does not exist");
    } else {
      arr.splice(rem - 1, 1);
    }
  }
  console.log(arr);
}

function edit(ed){
  const array = ed.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (ed === undefined){
       console.log("Error!");
    }
    else if (Number(array[i]) === i + 1) {
      arr[i].replace(arr[i], ed);
    }
    else {
      arr[i].replace(arr[arr.length - 1], ed);
  }
  
}
console.log(arr)
}

function check(done){
  for(let i=0 ; i<arr.length ; i++){
    if(done === ""){
      console.log("error")
    
    }
    else  {
      arr[i].replace(arr[i],"done")
    } 

  }
  console.log(arr)

}

// The following line starts the application
startApp("Mariam suleiman");
