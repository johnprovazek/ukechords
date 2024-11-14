// Adapted from here: https://www.geeksforgeeks.org/reactjs-uselocalstorage-custom-hook/

import { useState, useEffect } from "react";
import chordsList from "../assets/data/chordsList.json";

let defaultValue = 0;

export const setAllChords = () => {
  chordsList["base"].forEach((base) => {
    chordsList["quality"].forEach((quality) => {
      setLocalStorageChords(base + quality);
    });
  });
};

export const getAllChords = () => {
  let chordDetails = [];
  chordsList["base"].forEach((base) => {
    chordsList["quality"].forEach((quality) => {
      let chordRating = setLocalStorageChords(base + quality);
      chordDetails.push({ name: base + quality, rating: chordRating });
    });
  });
  return chordDetails;
};

export const getChordRating = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return defaultValue;
    }
  } catch (error) {
    return defaultValue;
  }
};

const setLocalStorageChords = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
};

const useLocalStorageChords = (key) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => setLocalStorageChords(key));

  useEffect(() => {
    setLocalStorageValue(setLocalStorageChords(key));
  }, [key]);

  const setLocalStorageStateValue = (valueOrFn) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };
  return [localStorageValue, setLocalStorageStateValue];
};
export default useLocalStorageChords;
