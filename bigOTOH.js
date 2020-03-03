function print (a, b) {
  console.log(`Moving ${a} to ${b}`)
}

function TOH(n, source, dest, temp) {
  
  if (n === 0) {
     return;
  }
  else {
  
  
  TOH((n-1), source, temp, dest)
  print(source, dest)
  TOH((n-1), temp, dest, source )
  
  }
}

TOH(5, "A", "C", "B")


