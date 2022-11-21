import './Main.css';
import ProductItem from '../ProductItems/ProductItem';
// import prodcutDetial from '../ProductItems/FETCH_API/prodcutDetial';
import { GetProduct } from '../GetProduct/GetProduct';

function Main() {

    const useProdcutState = GetProduct()

    console.log(useProdcutState)

    const ItemParams = []

    for(let i = 1; i < 15; i++){
        console.log(useProdcutState.items[i].names)
        ItemParams.push({
            "name": useProdcutState.items[i].names,
            "price":useProdcutState.items[i].prices,
            "link":useProdcutState.items[i].links,
            "delivery": "В наличии",
            "credit": "0",
            "bonuce": "0",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrd8P1C1mzTXtZ6RiKrHADw4n1IJioPPBPw&usqp=CAU"
        },)

    }
    

    let product = ItemParams.map(p => <ProductItem name={p.name} 
            price={p?.price} 
            link={p?.link} 
            img={p?.img} 
            delivery={p?.delivery} 
            bonuce={p?.bonuce}
            credit={p?.credit}
            
    />)



    return (
        <div className="main">
            {product}
        </div>
    );
}

export default Main;
