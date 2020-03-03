
// Sheep counter - linear
const countSheep = function(number) {
  for (let i = number; i >= 0; i--) {
    if (i === 0) {
      return console.log('All sheep jumped over the fence!')
    } else {
     console.log(`${i}: Another sheep jumps over the fence`)}
  }
}

countSheep(5)

//Power Calculator linear with exponent.  Each exponent is one more tick of the same calculation

const powerCalculator = (base, exponent) => {
  if (exponent < 0) {return console.log('Enter an exponent greater than or equal to 0')}
  let answer = 1;
  for (let i = exponent; i >= 0; i--) {
    if (i === 0) {
      console.log(answer)
    } else {
      answer = answer * base
    }
  }
}

powerCalculator(3, 5)

//String Reverse - Linear, each extra letter is one more tick through the loop

const stringReverse = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString.concat(string[i])
  }
  console.log(newString)
}

stringReverse('Billy')

//Triangular Number - Constant, because it is a single calculation.
//Although, I'm not sure if I was supposed to know this formula I derived :-)

const triNumber = (number) => {
  return console.log(number*((number/2) + 0.5))
}

triNumber(9)

//String Splitter - note: only for single character separator.
//At least linear because of each string character taking
//an additional tick.  Multiple character separators make this
//a much more complex question.

const stringSplitter = (string, separator) => {
  let output = []
  let item = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] === separator) {
      output.push(item)
      item = ''
    } else {
      item = item.concat(string[i])
    }
    
  }
  output.push(item)
  console.log(output)
}

stringSplitter('02/20/2020', '/')

//Fibonacci - linear.  Each higher number is another tick through the calculation


const fibo = (number) => {
  let sequence = [1, 1]
  for (let i = 2; i <number; i++) {
      sequence.push(sequence[i-2] + sequence[i-1] )
  }
  console.log(sequence)
}

fibo(7)

//Factorial - linear.  Each number is another step through the loop
//which is just another *

const facto = (number) => {
  let answer = 1;
  if (number >=2) {
    for (let i = 2; i <= number; i++) {
      answer *= i
    }
  }
  console.log(answer)
}

facto(4)