export const isPangram = (sentence) => {
  if (!sentence) return false;
  const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const newSentence = sentence.toLowerCase().split("");
  for (const a of alphabets) {
    if (!newSentence.includes(a)) return false;
  }
  return true;
};
