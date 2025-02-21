function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || f1 === null ||
      typeof f2 !== "object" || f2 === null) {
    return "Invalid";
  }
  return (f1.bestFriend === f2.roll) && (f2.bestFriend === f1.roll);
}
// console.log(isBestFriend({name:"hashem", roll:1, bestFriend:2}, {name:"kashem", roll:2, bestFriend:1}));
