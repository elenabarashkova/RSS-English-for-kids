interface Content {
  title: string
  id: string
  className: string
  content: string
}

export const renderPopup = ({title, id, className, content}: Content) =>
  (
    `<div id=${id} class="popup ${className}">
  <button class="btn-close">X</button>
  <div class="popup-title">
    <h2>${title}</h2>
  </div>
  <div class="popup-inner">
    ${content}
  </div>
</div>`
  )
