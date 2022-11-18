import React from "react";

function prodcutDetial () {
    
    fetch("http://64.227.117.111:5000/prices/vi-price-report.json", {
            mode: 'no-cors',
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },

        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
    
  }

export default prodcutDetial;
