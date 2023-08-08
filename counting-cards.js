let count = 0;

function cc(card) {
  // Only change code below this line
  const plusOne = [2,3,4,5,6];
  const zero = [7,8,9];
  const minusOne = [10, "J", "Q","K","A"];
  if(plusOne.includes(card)) count+=1;
  if(minusOne.includes(card)) count-=1;

if(count>0) return `${count} Bet`;
return `${count} Hold`
  
  }

  // Only change code above this line
  

cc(2); cc(3); cc(7); cc('K'); cc('A');
