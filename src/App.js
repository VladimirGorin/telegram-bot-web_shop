import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductCartItems from './components/ProductCartItems/ProductCartItems';
import {Route, Routes} from "react-router-dom"
import PaymentsForm from './components/PaymentsForm/PaymentsForm';
import ProductCart from './components/ProductCartItems/ProdcutCart/ProductCart'; 


function App() {
    const {onToggleButton, tg} = useTelegram();
    const [link, setLink] = useState({"link":"abc", "name": "name", "price":"100", "img": "img"})
    const [Product, setProduct] = useState({"link":"abc", "name": "name", "price":"100", "img": "img"})


    useEffect(() => {
        tg.ready();
    }, [])

    const currentLink = (link) => {
        setLink(link)

    } 

    const product = (p) => {
        setProduct(p)
        console.log(p)
    } 

    return (
        <div className="App">
            <Header product={product} />
            <Routes>

                <Route path="/" element={<Main currentLink={currentLink} /> }  />
                <Route path="/paymentForm" element={<PaymentsForm  />}  />  
                <Route path={Product.link} element={<ProductCart name={Product.name} price={Product.price} img={Product.img} />}  />  

            </Routes>
        </div>
        
    );
}

export default App;
