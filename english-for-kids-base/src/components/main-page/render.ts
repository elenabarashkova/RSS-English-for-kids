import { CATEGORY_ROUTE } from "../../router/constants";
import { ServerCategory, ServerCategoryList } from "../admin-panel/types";

const getCategoryCard = ({ name, id, imageurl }: ServerCategory): string => (`
  <a href="#${CATEGORY_ROUTE}/${id}" class="card category-card">
    <div class="card-inner">
      <div class="card-pic">
        <img src='${imageurl || '../../assets/default.jpeg'}' alt=${name}>
      </div>
      <div class="card-caption">
        <div class="caption-normal">
          <div class="caption-text name">${name}</div>
        </div>
      </div>
    </div>
  </a>
`)

export const getMainPageInner = (categoriesList: ServerCategoryList): string => (`
  <div id="mainPage" class="main-page">
    <div class="card-wrap">
      ${categoriesList.map((category: ServerCategory) => getCategoryCard(category)).join('')}
    </div>
  </div>
`)