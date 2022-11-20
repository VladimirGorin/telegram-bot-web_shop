
function prodcutDetial () {
    fetch("http://94.154.238.7:36211/Hotline/price.json")
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result)
        },
        (error) => {
            console.log(error)
        }
    )
    

  }

export default prodcutDetial;
