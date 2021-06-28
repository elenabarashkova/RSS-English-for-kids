import { ROUTES } from "../../router/constants";

const getCategoryCard = ({ name, url, imageUrl }: Category): string => (`
  <a href="#${ROUTES.CATEGORY.url}/${url}" class="card category-card">
    <div class="card-inner">
      <div class="card-pic">
        <img src=${imageUrl} alt=${name}>
      </div>
      <div class="card-caption">
        <div class="caption-normal">
          <div class="caption-text name">${name}</div>
        </div>
      </div>
    </div>
  </a>
`)

export const getMainPageInner = (categoriesConfig: CategoriesListConfig): string => (`
  <div id="mainPage" class="main-page">
    <div class="card-wrap">
      ${(Object.keys(categoriesConfig)).map((category: string) => getCategoryCard(categoriesConfig[category])).join('')}
    </div>
  </div>
`)