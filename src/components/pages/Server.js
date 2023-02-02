import { useState } from "react";

export const FetchJson = (SetCoffeeItem) => {
  fetch('./db.json')
    .then(response => response.json())
    .then(data => SetCoffeeItem(data.coffeeCard))
    .catch(error => console.log(error.message))
  return
}
