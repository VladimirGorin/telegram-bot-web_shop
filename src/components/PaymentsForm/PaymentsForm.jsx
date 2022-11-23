import React, { useCallback, useEffect, useState } from "react";
import "./PaymentsForm.css";
import { useTelegram } from "../../hooks/useTelegram";
import { Link } from "react-router-dom";
import { decode as base64_decode, encode as base64_encode } from "base-64";
// import * as crypto from "crypto"
// import { createHash } from "crypto"

const PaymentsForm  = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const [telephone, setTel] = useState("");
  const [payment, setPayment] = useState("liqpay");

  const { tg } = useTelegram();
  const [api, setApi] = useState("");

  const [SignatureKey, setSignatureKey] = useState("");
  const [DataKey, setDataKey] = useState("");

  const test = JSON.stringify({ value: "value" });

  useEffect( () => {
    async function fetchData() {
      const response = await fetch(`/liqpay-payment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          public_key: "sandbox_i32225837954",
          version: "3",
          action: "pay",
          amount: "3",
          currency: "UAH",
          description: "test",
          order_id: "000001",
        }),
      });
  
      const data = await response.json();
      setApi(data);
      console.log(data);
    }

    fetchData();

    // fetch("/api")
    // .then(response => response.json())
    // .then(res => setApi(res.payment))
  }, []);
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
          placeholder={"Телефон"}
          value={telephone}
          onChange={onChangeTelephone}
        />
        <select value={subject} onChange={onChangeSubject} className={"select"}>
          <option value={"physical"}>Физ. лицо</option>
          <option value={"legal"}>Юр. лицо</option>
        </select>
        <select value={payment} className={"select"}>
          <option value={"liqpay"}>liqpay</option>
          {/* <option value={"privatbank"} onClick={checkerBank}>Моно банк</option> */}
        </select>
        <br />
        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
          <input type="hidden" name="data" value={DataKey} />
          <input type="hidden" name="signature" value={SignatureKey} />
          <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default PaymentsForm;
