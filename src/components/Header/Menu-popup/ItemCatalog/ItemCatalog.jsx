import React from 'react'

function ItemCatalog(props) {


  const getItems = (name) => {
    let collection = []

    for (let i = 1; i < props?.useProdcutState.items.length; i++) {
      if(props?.useProdcutState.items[i].categori[0] === name){

        collection.push({
          products: props?.useProdcutState.items[i].product_name[0],
          link: props?.useProdcutState.items[i].links[0].replace("https://hotline.ua/", ""),
          name: props?.useProdcutState.items[i].names[0],
          price: props?.useProdcutState.items[i].prices[0],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrd8P1C1mzTXtZ6RiKrHADw4n1IJioPPBPw&usqp=CAU"
        })
        
        props.setItem(true)
        props.setProduct(collection)
      }
    }
  }

  return (
    <div className='item' onClick={() => {getItems(props.name)}}>{props.name}</div>
  )
}

export default ItemCatalog