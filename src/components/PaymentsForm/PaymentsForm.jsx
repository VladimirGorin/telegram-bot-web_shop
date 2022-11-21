import React, { useCallback, useEffect, useState } from "react";
import "./PaymentsForm.css";
import { useTelegram } from "../../hooks/useTelegram";
import { Link } from "react-router-dom";
import {decode as base64_decode, encode as base64_encode} from 'base-64';


const PaymentsForm = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const [telephone, setTel] = useState("");
  const [payment, setPayment] = useState("monobank");

  const { tg } = useTelegram();
  const [priat, monobank] = useState("");
//   data:eyJwdWJsaWNfa2V5Ijoic2FuZGJveF9pMzIyMjU4Mzc5NTQiLCJ2ZXJzaW9uIjoiMyIsImFjdGlvbiI6InBheSIsImFtb3VudCI6IjMwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiJ0ZXN0Iiwib3JkZXJfaWQiOiIwMDAwMDEifQ==
//   signature:skaMSeqYOlIXP9Mkb2+MAcsSuEw=


  const public_key = "sandbox_i32225837954";
  const private_key = "sandbox_EBKLJ9d4MxgYRkF0SZ88EXabmmnskRJuuKbdxP0P";
  const json_string = JSON.stringify({"public_key": "sandbox_i32225837954","version":"3","action":"pay","amount":"3","currency":"UAH","description":"test","order_id":"000001"})
  

  const data = base64_encode(json_string);
  const sign_string = private_key + data + public_key;
  const signature = base64_encode(sign_string)
  console.log(signature)


  // const onSendData = useCallback(() => {
  //     const data = {
  //         country,
  //         street,
  //         subject
  //     }
  //     tg.sendData(JSON.stringify(data));
  // }, [country, street, subject])

  // useEffect(() => {
  //     tg.onEvent('mainButtonClicked', onSendData)
  //     return () => {
  //         tg.offEvent('mainButtonClicked', onSendData)
  //     }
  // }, [onSendData])

  //   useEffect(() => {
  //     if (!street || !street || !telephone) {
  //       tg.MainButton.hide();
  //     } else {
  //       tg.MainButton.show();
  //       tg.MainButton.setParams({
  //         text: "Отправить данные",
  //       });
  //     }
  //   }, [country, street]);

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

  const checkerBank = (e) => {
    if (payment === "monobank") {
      console.log(payment);
      monobank(payment);
    } else if (payment === "privatbank") {
    }
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

        <select value={payment} onChange={onChangePayment} className={"select"}>
          <option value={"monobank"} onClick={checkerBank}>
            Приват банк
          </option>
          {/* <option value={"privatbank"} onClick={checkerBank}>Моно банк</option> */}
        </select>
        <br />

        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
            <input type="hidden" name="data" value="eyJwdWJsaWNfa2V5Ijoic2FuZGJveF9pMzIyMjU4Mzc5NTQiLCJ2ZXJzaW9uIjoiMyIsImFjdGlvbiI6InBheSIsImFtb3VudCI6IjMwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiJ0ZXN0Iiwib3JkZXJfaWQiOiIwMDAwMDEifQ=="/>
            <input type="hidden" name="signature" value="skaMSeqYOlIXP9Mkb2+MAcsSuEw="/>
            <input type="image" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
        </form>

      </div>
      <div className="right"></div>
    </div>
  );
};

export default PaymentsForm;
