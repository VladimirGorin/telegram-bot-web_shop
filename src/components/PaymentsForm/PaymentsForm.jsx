import React, { useCallback, useEffect, useState } from "react";
import "./PaymentsForm.css";
import { useTelegram } from "../../hooks/useTelegram";
import axios from "axios";

const PaymentsForm = (props) => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const [telephone, setTel] = useState("");
  const [payment, setPayment] = useState();

  const { tg } = useTelegram();
  const [api, setApi] = useState("");

  const [SignatureKey, setSignatureKey] = useState("");
  const [DataKey, setDataKey] = useState("");
  const [buttonType, setButtonType] = useState("");
  const [userInfo, setUserInfo] = useState("");


  const test = JSON.stringify({ value: "value" });

  // fetch(`http://185.225.35.7:3001/liqpay-payment`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         public_key: "sandbox_i32225837954",
  //         version: "3",
  //         action: "pay",
  //         amount: "3",
  //         currency: "UAH",
  //         description: "test",
  //         order_id: "000001",
  //       }),
  //     });


  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.post(
  //       "http://185.225.35.7:3001/liqpay-payment",
  //       {
  //         public_key: "sandbox_i32225837954",
  //         version: "3",
  //         action: "pay",
  //         amount: props?.price,
  //         currency: "UAH",
  //         description: `Опалата товара ${props?.name}`,
  //         order_id: "000001",
  //       }
  //     );

  //     const data = await response.data;
  //     setApi(data);
  //   }

  //   fetchData();

  //   // fetch("/api")
  //   // .then(response => response.json())
  //   // .then(res => setApi(res.payment))
  // }, []);

  useEffect(() => {
    if(country === "" || telephone.length < 10){
      setButtonType("hiddne")
    }else{
      setButtonType("image")

    }
  })

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onChangePayment = (e) => {
    setPayment(e.target.value);
  };

  const onChangeTelephone = (e) => {
    setTel(e.target.value);
  };

  const sendDate = () => {


    let object = {
      "ИП": subject,
      "Телефон": telephone,
      "Город": country
    }
    setUserInfo(object)
  }

  return (
    <div className={"form"}>
      <div className="left">
        <h3>Введите ваши данные</h3>
        <input
          className={"input"}
          type="text"
          placeholder={"Адрес"}
          value={country}
          autoFocus
          onChange={onChangeCountry}
        />
        <input
          data-mask="999-99-999"
          name="tel"
          type="tel"
          pattern="2-[0-9]{3}-[0-9]{3}"
          className={"input"}
          maxLength={"13"}
          autoCorrect=""
          autoCapitalize=""
          placeholder={"Телефон более 10 символов"}
          value={telephone}
          onChange={onChangeTelephone}
        />
        <select value={subject} onChange={onChangeSubject} className={"select"}>
          <option value={"physical"}>Физ. лицо</option>
          <option value={"legal"}>Юр. лицо</option>
        </select>
        <select value={payment} className={"select"}>
          <option value={"liqpay"}>liqpay</option>
          <option value={"uponDelivery"}>Оплата при отриманні товару</option>
          <option value={"privatBank"}>На карту Приватбанку</option>
          <option value={"byInvoice"}>По рахунку фактурі</option>
          {/* <option value={"privatbank"} onClick={checkerBank}>Моно банк</option> */}
        </select>
        <br />
        <form
          method="POST"
          action="https://www.liqpay.ua/api/3/checkout"
          acceptCharset="utf-8"
        >
          <input type="hidden" name="data" value="{DataKey}" />
          <input type="hidden" name="signature" value="{SignatureKey}" />
          <input className="button-send" onClick={sendDate}
            type={buttonType}
            src="//static.liqpay.ua/buttons/p1ru.radius.png"
          />
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default PaymentsForm;
