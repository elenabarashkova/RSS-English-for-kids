const aboutGameIconLink = require('../assets/about-game-icon.svg');
const bestScoreIconLink = require('../assets/best-score-icon.svg');
const settingsIconLink = require('../assets/settings-icon.svg');

export const PAGES_ID = {
  ABOUT_GAME: 'about_game',
  BEST_SCORE: 'best_score',
  SETTINGS: 'settings',
  GAME: 'game',
};

export const MENU_ITEMS = [
  {
    id: PAGES_ID.ABOUT_GAME,
    name: 'About Game',
    icon: aboutGameIconLink,
  },
  {
    id: PAGES_ID.BEST_SCORE,
    name: 'Best Score',
    icon: bestScoreIconLink,
  },
  {
    id: PAGES_ID.SETTINGS,
    name: 'Game Settings',
    icon: settingsIconLink,
  },
];

export const DEFAULT_PAGE = PAGES_ID.ABOUT_GAME;