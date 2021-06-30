export const getImagePath = (category: string, word: string): string => (
  `./assets/category/${category}/${word}/${word}.jpg`
);

export const getSoundPath = (category: string, word: string): string => (
  `./assets/category/${category}/${word}/${word}.mp3`
);

export const getCategoryImagePath = (name: string): string => (
  `./assets/category/${name}/${name}.jpg`
);