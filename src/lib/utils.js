import chordsList from "../assets/data/chordsList.json";

const DEFAULT_VALUE = 0;
const MAX_VALUE = 5;

const setLocalStorageChords = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      localStorage.setItem(key, JSON.stringify(DEFAULT_VALUE));
      return DEFAULT_VALUE;
    }
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(DEFAULT_VALUE));
    return DEFAULT_VALUE;
  }
};

const getAllChordRatings = () => {
  let chordDetails = [];
  chordsList["base"].forEach((base) => {
    chordsList["quality"].forEach((quality) => {
      let chordRating = setLocalStorageChords(base + quality);
      chordDetails.push({ name: base + quality, rating: chordRating });
    });
  });
  return chordDetails;
};

export const setAllChordRatings = () => {
  chordsList["base"].forEach((base) => {
    chordsList["quality"].forEach((quality) => {
      setLocalStorageChords(base + quality);
    });
  });
};

export const getChordRating = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return DEFAULT_VALUE;
    }
  } catch (error) {
    return DEFAULT_VALUE;
  }
};

export const getChordsFilteredRandomized = () => {
  let allChords = getAllChordRatings();
  let filteredChords = allChords.filter((c) => c.rating < MAX_VALUE);
  let selectChords = filteredChords.length > 0 ? filteredChords : allChords;
  let selectChordsNames = selectChords.map((v) => v.name);
  for (let i = selectChordsNames.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [selectChordsNames[i], selectChordsNames[rand]] = [
      selectChordsNames[rand],
      selectChordsNames[i],
    ];
  }
  return selectChordsNames;
};
