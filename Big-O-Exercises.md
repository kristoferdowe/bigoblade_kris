1.) 
  a.)  Constant.  Doesn't matter how big the crowd is.
  b.)  Linear.  Every input increase has to be calculated. (10 times the people take 10 times as long)

2.) O(1) (constant), doesn't matter how large the number is, just returns true/false.

3.) O(n^2) (quadratic) If you double the input, you quadruple the running time.   

4.) O(n) (linear)  Every item must be calculated

5.) O(n) (linear)  Worst case:  every item must be searched.  Each search is a tick.

6.) O(n^2) (quadratic/polynomial) Nested loop, each item added to the input is item^2 number of extra ticks

7.) Creates fibonacci sequence for the input number (where the array index is the "traditional" sequence index)
    O(n) linear, because for each increment of the input, we have to do one more tick in the loop

8.) O (logn) logarithmic.  This is a binary/halving style search.  The number of items searched is halved every time, so the resulting computations needed scale logarithmically with input size.

9.) O(1) constant.  This only does a single calculation that fetches a random element.  There is no real different how large the array input, it still does the same single calculation.

10.) This checks to see if a number is prime.  O (?)  This is an interesting one.  I'm assuming the desired answer is linear or logn, but really... That's a question for a mathmatician.  The prime number gap grows as you input larger numbers...but then at a certain point the gap stops increasing.  There are also theorems that talk about maximum distances between "prime pairs", etc.  So honestly I'd need to know a lot about prime numbers to answer accurately. 

11.) Algorithm and function in bigOTOH.js 
a.) Src still has the two biggest plates.  Other three are stacked in order on dest.
b.) 7, 15, 31 (2*previous + 1)
c.) O(2n+1)?

12.)  These can be found in bigOExercises.js

13.)  Only finished the first 7 so I'm going to go by them:

    1.) Linear - One tick for each item
    2.) Linear (by exponent) - one cycle for each exponent increase
    3.) Linear - one slice for each additional character
    4.) Linear - one cycle for each additonal number higher
    5.) Too many factors for a simple answer.  Linear for the length of the string
    6.) Going to go with polynomial or exponential.  Not sure which one...each additional number means having as many calculations as the previous two numbers combined.  OH, I know, O(fibbonaci) :-)

    7.)  Linear - additional cycle for each increase in number

14.)  These can be found in the code comments for bigOExercises.js







