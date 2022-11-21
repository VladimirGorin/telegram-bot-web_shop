import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductCartItems from './components/ProductCartItems/ProductCartItems';
import {Route, Routes} from "react-router-dom"
import PaymentsForm from './components/PaymentsForm/PaymentsForm';

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>

                <Route path="/" element={<Main />}  />
                <Route path="/item/*" element={<ProductCartItems />}  />
                <Route path="/paymentForm" element={<PaymentsForm />}  />

            </Routes>
        </div>
        
    );
}

export default App;
