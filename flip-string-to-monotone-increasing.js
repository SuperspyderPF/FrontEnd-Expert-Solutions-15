var minFlipsMonoIncr = function(s) {
  let counts = [0, 0]

  let left = 0
  let right = s.length - 1

  let flips = 0

  //reduce string s to only invalid orders
  ////00001xxxx01111 => 1xxxx0
  while(s[left] == 0) left++
  while(s[right] == 1) right--

  for(let i = left; i <= right; i++){
    //counts ones and zeros
    counts[s[i]]++

    //if zero counts ever becomes >= to one counts then we flip the ones
    //since we have to flip atleast that many times, so we might as well
    //just flip them now and make the string valid
    //111000xxxx => 000000xxxx
    if(counts[0] >= counts[1]){
      flips += counts[1]
      //reset the counts skip the zeros since they are all valid after we 
      //flip the ones
      //0000001xxxx => 1xxxx
      counts = [0, 0]
      while(s[i+1] == 0) i++
    }
  }
  //return the number of ones we flipped + the remaining zeros we counted above
  return flips + counts[0]
  
};