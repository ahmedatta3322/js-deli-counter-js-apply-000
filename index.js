function takeANumber(line,number){
  line.push(number)
  return `Welcome, ${number}. You are number ${line.indexOf(number)+1} in line.`
  
}
function nowServing(line){
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
    
  }
  else{
    return "There is nobody waiting to be served!"
  }
  
}
function currentLine(line){
  let x = []
  if (line.length>0) {
      for (var i = 0 ; i<line.length ; i++){
    x = x + (i+1) 
    x = x + ". "
    x = x + `${line[i]}`
    if (line.indexOf(line[i])<(line.length-1)){
      x = x + ", "
    }
    
  }
  
  }
  else {
    x = "empty."
  }
  if (x === "empty."){
    return `The line is currently ${x}`
  }
  else{
    return `The line is currently: ${x}`
  }

  
}