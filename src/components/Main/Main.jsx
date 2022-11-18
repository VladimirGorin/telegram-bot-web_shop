import './Main.css';
import ProductItem from '../ProductItems/ProductItem';
import prodcutDetial from '../ProductItems/FETCH_API/prodcutDetial';


function Main() {
    const ProductName = "game pc"
    const ProdcutPrice = "100$"
    prodcutDetial()
    const ItemParams = [
        {
            "name": "Product1",
            "price":"100%",
            "link":"https://youtube.com"
        },
        {
            "name": "Product2",
            "price":"200%",
            "link":"https://youtube.com"
        }
    ]

    let product = ItemParams.map(p => <ProductItem name={p.name} price={p.price} href={p.link} />)

    return (
        <div className="main">
            {product}
        </div>
    );
}

export default Main;
