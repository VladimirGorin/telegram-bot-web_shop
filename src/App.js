import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom"
import PaymentsForm from './components/PaymentsForm/PaymentsForm';
import ProductCart from './components/ProductCartItems/ProdcutCart/ProductCart'; 
import Login from './components/Login/Login';
import GetPost from './components/GetPost/GetPost';


function App() {
    const {onToggleButton, tg} = useTelegram();
    const [link, setLink] = useState({"link":"abc", "name": "name", "price":"100", "img": "img"})
    const [Product, setProduct] = useState({"link":"abc", "name": "name", "price":"100", "img": "img"})
    const [form, setFrom] = useState({"name":"name", "price": "price"})


    useEffect(() => {
        tg.ready();
    }, [])

    const currentLink = (link) => {
        setProduct(link)

    } 

    const product = (p) => {
        setProduct(p)
    } 

    return (
        <div className="App">
            <Header product={product} />
            <Routes>

                <Route path="/" element={<Main currentLink={currentLink} setFrom={setFrom} /> }  />
                <Route path="/paymentForm" element={<PaymentsForm name={form.name} price={form.price} />}  />  
                <Route path={Product.link} element={<ProductCart setFrom={setFrom} name={Product.name} price={Product.price} img={Product.img} />}  />  
                <Route path={"login"} element={<Login />}  />  
                <Route path={"post"} element={<GetPost setFrom={setFrom} name={Product.name} price={Product.price} img={Product.img} />}  />  

            </Routes>
        </div>
        
    );
}

export default App;
