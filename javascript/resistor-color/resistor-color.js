export const colorCode = (arr) => {
  const color = arr.toLowerCase();
  let resistance = COLORS.findIndex((c) => c === color);
  return resistance;
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
