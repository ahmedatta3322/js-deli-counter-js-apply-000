function takeANumber(line){
  line.push(line.length + 1 )
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
    x = x.length
    x = x + ". "
    x = x + x.length
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