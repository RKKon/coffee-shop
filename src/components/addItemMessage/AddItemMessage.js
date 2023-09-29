// import { useEffect } from "react";

import "./addItemMessage.sass";

const AddItemMessage = ({ cart }) => {
  return <div className="add_item_msg">{cart.slice(-1)[0].title} added to basket</div>;
};

export default AddItemMessage;
