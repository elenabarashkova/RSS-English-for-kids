export const getElement = (name: string, id: string): HTMLElement => (
  document.querySelector(`${name}[data-id='${id}']`) as HTMLElement
)

export const setDisabledState = (btnToDisable: HTMLElement, btnToAble: HTMLElement):void => {
  btnToDisable?.setAttribute('disabled', '');
  btnToAble?.removeAttribute('disabled');
}