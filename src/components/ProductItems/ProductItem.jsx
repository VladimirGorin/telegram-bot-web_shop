import './ProductItem.css';


function ProductItem(props) {

    return (
        <div className="ProductItem">
            <div className="ProductItem-name">{props.name}</div>
            <div className="ProductItem-price">{props.price}</div>
            <div className="ProductItem-buy">
                <a href={props?.href} target="_blank">К товару</a></div>
        </div>
    );
}

export default ProductItem;
