
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  


  let name = text.trim()
  let part = name.split(' ')
  let task = part[0]
  let added = part.slice(1).join(' ')

  
  if ( task === 'quit' ){
    quit();
  }
  else if (task === 'exit'){
    exit();
  }
  else if(task === 'hello'){
    //console.log('hello')
    hello(added);
  }
  else if(task === 'help'){
    help();
  }
  else if(task === 'list'){
    list();
  }
  else if(task === 'add'){
    add(added);
  }

  
  else{
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name){
  if(name == null || name == "" || name == undefined){
    console.log("Hello!")
  }else{
    let empty = `hello ${name}!`;
     empty= empty.replace("\n" , "");
    console.log(`${empty}`);
  }
}

let arr = ["exit to exiting" ,"say Hello", "say hello with name", " help to check list of commands"]


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exit(){
  console.log('exiting now , goodbye!')
  process.exit();
}
// show me list of  possible commands 
function help(){
  console.log("'hello (name)'\n'quit'\n'exit'");
}

function list(){
  for(let i=0; i<arr.length; i++){
    console.log(i+1 +"- "+ arr[i]);
  }

}

function add(s){
  if(s === ""){
    console.log("error");

  }
  else{
    arr.push(s)
  }
  console.log(arr)


}
function remove(){

}

// The following line starts the application
startApp("Mariam suleiman")
