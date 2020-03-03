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

10.) This checks to see if a number is prime.  O (?)  This is an interesting one.  I'm assuming the desired answer is linear or logn, but really... That's a question for a mathmatician.  The prime number gap grows as you input larger numbers...but then at a certain point the gap stops increasing.  There are also theorems that talk about maximum distances between "prime pairs", etc.  So honestly I'd need to a lot about prime numbers to answer accurately. 





