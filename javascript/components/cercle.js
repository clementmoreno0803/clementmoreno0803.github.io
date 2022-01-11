const cercle = document.querySelector('.cercle');
const presentation = document.querySelector('.presentation')
export const initCercle = () => {

    presentation.prepend(cercle)
}
export default initCercle