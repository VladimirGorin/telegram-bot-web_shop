import api from "./api.json"

export function GetProduct() {
    
        // Axios({
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json'},
    //     url: 'http://94.154.238.7:36211/Hotline/price.json',
    //   }).then(function (response) {  

    let items = []
    let cur = Object.values(api)
    let data = cur.map(p => items.push(
        {   
            "id": [p.ID],
            "names": [p["Название товара"]],
            "prices": [p["Минимальная цена"]],
            "links": [p.hotline_url],
            "categori": [p["Название категории"]],
            "price_moth": [p["Дата публикации"]],
            "product_name": [p["Название товара"]]
        }
        ))
    

    return {items}
}
