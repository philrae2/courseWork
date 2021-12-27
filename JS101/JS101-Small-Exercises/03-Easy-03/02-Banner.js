function print (char, strlen) {
  let counter = 0;
  let string = "";
  do {
    string += char;
    counter++;
  } while (counter < strlen)
  return(string);
}


function logInBox (message) {
 console.log(`+ ${print("-",message.length)} +`);
 console.log(`| ${print(" ",message.length)} |`);
 console.log(`| ${print(message,1)} |`);
 console.log(`| ${print(" ",message.length)} |`);
 console.log(`+ ${print("-",message.length)} +`);
}


logInBox('To boldly go where no one has gone before.');