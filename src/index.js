module.exports = function getZerosCount(number, base) {
  let array = [];
  let masspr = [2, 3, 5, 7, 11, 13];
  let masscount = [0, 0, 0, 0, 0, 0];
  let countpr = 0;
  let x;
  let res;
  for (let i = 0;i<masspr.length;i++){
    while(true){
      if (base % masspr[i] == 0){
        base = base/masspr[i];
        masscount[i]++;
      }
      else {
        countpr++;
        x = base;
        break;
      }
    }
  }
  for (let i = 0;i<masspr.length;i++){
    if (masscount[i]>0){
      res = Math.floor(number/masspr[i]);
      let p = Math.pow(masspr[i], 2);
      while(number > 0 && p < number)
      {
        res += Math.floor(number/p);
        p *= masspr[i];
      }
      res = Math.floor(res/masscount[i]);
      array.push(res);
    }
  }
  if (countpr == 6 && x !== 1){
    res = Math.floor(number/x);
    let p = Math.pow(x, 2);
    for(let i=0;i<countpr;i++){
      res += Math.floor(number/p);
      p *= x;
    }
    res = Math.floor(res);
    array.push(res);
  }
  let min;
  for(let i=0;i<array.length;i++){
    min = array[0];
    if (array[i]<min){
       min = array[i];
    }
  }
  return min;
}
