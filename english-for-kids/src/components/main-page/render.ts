import { ROUTES } from "../../router/constants";

const getCategoryCard = ({ name, url, imageUrl }: Category): string => (`
  <a href="#${ROUTES.CATEGORY.url}/${url}" class="category-card card">
    <img src=${imageUrl} alt=${name}>
    <div>${name}</div>
  </a>
`)

export const getMainPageInner = (categoriesConfig: CategoriesListConfig): string => (`
  <div id="mainPage" class="main-page">
    <div class="card-wrap">
      ${(Object.keys(categoriesConfig)).map((category: string) => getCategoryCard(categoriesConfig[category])).join('')}
    </div>
  </div>
`)