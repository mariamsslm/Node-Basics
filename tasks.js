
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
  else if (task === 'remove'){
    remove(added);
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
// show me list of  possible commands (hello , exit , add , remove, show list  )
function help(){
  console.log("'hello'\n'hello with name'\n'quit'\n'exit'\n'show list'\n'add to arr'\n'remove from arr'");
}

function list(){
  for(let i=0; i<arr.length; i++){
    console.log(i+1 +"- "+ arr[i]);
  }

}
// add element to arr
function add(ad){
  if(ad === ""){ 
    console.log("error");

  }
  else{
    arr.push(s)
  }
  console.log(arr)


}
// remove element from arr
function remove(rem){
  for(let i=0; i<arr.length ;i++){

    if(rem === undefined){// check if just remove delete last element
      arr.pop();
    }
    else{
      arr.splice(rem-1, 1)
     
    }
    
  }
  console.log(arr);
}

// The following line starts the application
startApp("Mariam suleiman")
