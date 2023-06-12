export const initialCapital = (v: string) => {
  const words = v.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  const updatedString = words.join(" ");
  return updatedString;
};
