export const decodedValue = ([clr1, clr2]) => {
  let color1 = Colors.indexOf(clr1);
  let color2 = Colors.indexOf(clr2);
  return parseInt(`${color1}${color2}`);
};

const Colors = [
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
