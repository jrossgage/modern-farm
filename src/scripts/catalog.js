export const Catalog = (foods) => {
    return (
        foods.map(food => {
            `<section class="plant">${food.type}</section>`
        })
    )
}