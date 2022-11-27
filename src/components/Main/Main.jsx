import './Main.css';
import ProductItem from '../ProductItems/ProductItem';
// import prodcutDetial from '../ProductItems/FETCH_API/prodcutDetial';
import { GetProduct } from '../GetProduct/GetProduct';
import { useState } from 'react';
import {Link, Route, Routes} from "react-router-dom";

function Main({currentLink, setFrom}) {
    const useProdcutState = GetProduct()
    const [link, setLink] = useState()

    const ItemParams = []

    let maxValueInObject = useProdcutState.items.length

    for(let i = 1; i < 40; i++){
        let links = useProdcutState.items[i].links[0].replace("https://hotline.ua/", "")
        
        ItemParams.push({
            "id": useProdcutState.items[i].id,
            "name": useProdcutState.items[i].names,
            "price":useProdcutState.items[i].prices,
            "link":links,
            "delivery": "В наличии",
            "credit": "0",
            "bonuce": "0",
            "price_moth": useProdcutState.items[i].price_moth,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrd8P1C1mzTXtZ6RiKrHADw4n1IJioPPBPw&usqp=CAU"
        },)

    }

    const productLinkUpdate = (link) => {
        currentLink(link)

    }

    const getFormData = (product) => {

        setFrom(product)

    }
    let product = ItemParams.map(p => <ProductItem name={p.name} 
            price={p?.price} 
            link={p?.link} 
            img={p?.img} 
            delivery={p?.delivery} 
            bonuce={p?.bonuce}
            credit={p?.credit}
            price_moth={p?.price_moth}
            id={p.id}
            productLink={productLinkUpdate}
            setFrom={getFormData}
    />)

    alert("Мамунчик?? Ты ёжик тебе незя выходи")

    return (
        <div className="main">
            {product}
        </div>
    );
}

export default Main;
