export const FetchJson = (setCoffeeItem, setLoading, url = "./coffee-shop/db.json") => {
  setLoading(true);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.coffeeDrink.length) setCoffeeItem(data.coffeeDrink);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.message);
      setLoading(false);
    });
  return;
};
export const FetchCoffeeBeans = (setCoffeeItem, setLoading, url = "./coffee-shop/db.json") => {
  setLoading(true);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.coffeeBeans.length) setCoffeeItem(data.coffeeBeans);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.message);
      setLoading(false);
    });
  return;
};

// export const CoffeeAPI = async (setCoffeeAPI, setLoading) => {
//   await fetch("https://api.sampleapis.com/coffee/hot")
//     .then((response) => response.json())
//     .then((data) => {
//       let res = [];
//       for (let i = 0; i < data.length; i++) {
//         res.push(data[i]);
//       }
//       // before was in //
//       // let delDuplicates = []; // this part to remove duplicates items by using title, not id
//       // for (let i = 0; i < 20; i++) {
//       //   for (let k = 0; k < 20 ; k++) {
//       //     // eslint-disable-next-line no-loop-func
//       //     delDuplicates = res.filter(item => item.title !== res[k].title)
//       //   }
//       // }
//       // delDuplicates.unshift(data[0])
//       // res = delDuplicates

//       if (res && res.length) setLoading(false);
//       setCoffeeAPI(res);
//     })
//     .catch((error) => {
//       setLoading(false);
//       return console.log(error.message);
//       /* new Error(error) */
//     });
// };
