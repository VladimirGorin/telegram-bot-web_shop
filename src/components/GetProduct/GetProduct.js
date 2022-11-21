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
            "names": [p["Название товара"]],
            "prices": [p["Минимальная цена"]],
            "links": [p.hotline_url],
            "categori": [p["Название категории"]]
        }
        ))
    

    return {items}
}
