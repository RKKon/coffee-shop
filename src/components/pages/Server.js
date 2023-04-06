export const FetchJson = (setCoffeeItem, url = './db.json') => {
  fetch(url)
    .then(response => response.json())
    .then(data => setCoffeeItem(data.coffeeCard))
    .catch(error => console.log(error.message))
  return
}

export const CoffeeAPI = async (setCoffeeAPI, setLoading) => {
  fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(data => {
    let res = []
    for (let i = 0; i < 20; i++) { res.push(data[i]) }
    // before was in //
    // let delDuplicates = []; // this part to remove duplicates items by using title, not id
    // for (let i = 0; i < 20; i++) {
    //   for (let k = 0; k < 20 ; k++) {
    //     // eslint-disable-next-line no-loop-func
    //     delDuplicates = res.filter(item => item.title !== res[k].title)
    //   }
    // }
    // delDuplicates.unshift(data[0])
    // res = delDuplicates

    if (res && res.length) setLoading(false)
    setCoffeeAPI(res)
  })
  .catch(error => {
    setLoading(false)
    return console.log(error.message)
    /* new Error(error) */ 
  })
}
