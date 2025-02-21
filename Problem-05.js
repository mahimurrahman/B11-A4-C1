function calculateWatchTime(times) {
  if (!Array.isArray(times)) return "Invalid";
  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") return "Invalid";
    total += times[i];
  }
  let hour = Math.floor(total / 3600);
  let minute = Math.floor((total % 3600) / 60);
  let second = total % 60;
  return { hour, minute, second };
}
// console.log(calculateWatchTime([100, 99, 119, 300]));
