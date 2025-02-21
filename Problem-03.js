function electionResult(votes) {
  if (!Array.isArray(votes)) return "Invalid";
  let mangoCount = 0;
  let bananaCount = 0;
  for (let i = 0; i < votes.length; i++) {
    if (typeof votes[i] !== "string") continue;
    const vote = votes[i].toLowerCase();
    if (vote === "mango") {
      mangoCount++;
    } else if (vote === "banana") {
      bananaCount++;
    }
  }
  if (mangoCount > bananaCount) return "Mango";
  if (bananaCount > mangoCount) return "Banana";
  return "Draw";
}
// console.log(electionResult(["mango", "banana", "Na-Vote", "mango"]));
