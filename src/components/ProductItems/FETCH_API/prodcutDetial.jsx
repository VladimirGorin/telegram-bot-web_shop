import React from "react";


function prodcutDetial() {
    console.log("asd")
    const api_url = fetch("http://64.227.117.111:5000/prices/vi-price-report.json")
    console.log(api_url)

    const data = api_url.json()
    console.log(data)

}

export default prodcutDetial;
