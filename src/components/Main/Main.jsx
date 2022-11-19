import './Main.css';
import ProductItem from '../ProductItems/ProductItem';
// import prodcutDetial from '../ProductItems/FETCH_API/prodcutDetial';



function Main() {
    const ItemParams = [
        {
            "name": "Айфон 14 mini",
            "price":"1000$",
            "link":"https://youtube.com",
            "delivery": "Безплатно",
            "credit": "10%",
            "bonuce": "20%",
            "img": "https://www.donanimhaber.com/images/images/haber/152638/1400x1050iphone-14-plus-iphone-13-mini-den-daha-kotu-satiyor.jpg"
        },
        {
            "name": "Айфон 10",
            "price":"2000$",
            "link":"https://youtube.com",
            "delivery": "Платно",
            "credit": "0%",
            "bonuce": "10%",
            "img": "https://n11scdn.akamaized.net/a1/%7B0%7D/elektronik/cep-telefonu/apple-iphone-13-mini-512-gb-apple-turkiye-garantili__1376568335966437.jpg"



        }
    ]

    let product = ItemParams.map(p => <ProductItem name={p.name} 
        price={p.price} 
        link={p.link} 
        img={p.img} 
        delivery={p.delivery} 
        bonuce={p.bonuce}
        credit={p.credit}
        
        />)

    return (
        <div className="main">
            {product}
        </div>
    );
}

export default Main;
