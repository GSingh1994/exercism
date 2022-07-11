//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DnaStrand) => {
  let RnaStrand = "";

  for (const strand of DnaStrand) {
    switch (strand) {
      case "G":
        RnaStrand += "C";
        break;
      case "C":
        RnaStrand += "G";
        break;
      case "T":
        RnaStrand += "A";
        break;
      case "A":
        RnaStrand += "U";
        break;
    }
  }

  return RnaStrand;
};
