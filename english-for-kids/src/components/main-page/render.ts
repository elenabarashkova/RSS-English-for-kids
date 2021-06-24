import { ROUTES } from "../../router/constants";

const getCategoryCard = ({ name, url, imageUrl }: Category): string => (`
  <a href="#${ROUTES.CATEGORY.url}/${url}" class="category-card card">
    <img src=${imageUrl} alt=${name}>
    <div>${name}</div>
  </a>
`)

export const getMainPageInner = (categoriesConfig: CategoriesListConfig): string => (`
  <div id="mainPage" class="main-page">
    <div class="game-mode-wrap">
      <label class="game-mode-btn">
        <input type="checkbox" id="gameModeCheckbox" class="game-mode-toggler">
        <span class="game-mode-toggler-inner">
            <span class="in-game">Game</span>
            <span class="in-train">Train</span>
        </span>
      </label>
    </div>
    <div class="card-wrap">
      ${(Object.keys(categoriesConfig)).map((category: string) => getCategoryCard(categoriesConfig[category])).join('')}
    </div>
  </div>
`)