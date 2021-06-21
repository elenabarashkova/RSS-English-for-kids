const getCategoryCard = ({ name, imageUrl }: Category) => (`
  <a href="#category/${name}" class="category-card card">
    <img src=${imageUrl} alt=${name}>
    <div>${name}</div>
  </a>
`)

export const getMainPageInner = (categoriesConfig: CategoriesListConfig): string => (`
  <div id="mainPage" class="main-page card-wrap container">
    ${(Object.keys(categoriesConfig)).map((category: string) => getCategoryCard(categoriesConfig[category])).join('')}
  </div>
`)