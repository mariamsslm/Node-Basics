
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


  let name = text.split(" ")
  let secondword = name[1];
  
  if (text === 'quit\n' ){
    quit();
  }
  else if (text === 'exit\n'){
    exit();
  }
  else if(name[0] === 'hello\n' || name[0] === 'hello'){
    //console.log('hello\n')
    hello(secondword);
  }
  else if(text === 'help\n'){
    listCommands();
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
function listCommands(){
  console.log("'hello (name)'\n'quit'\n'exit'");
}

// The following line starts the application
startApp("Mariam suleiman")
