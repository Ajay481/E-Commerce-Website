import axios from "axios";

export const getCartListService = async (newEmailId) => {
  const { data } = await axios.get(
    `https://react-ecommerce-14f24-default-rtdb.firebaseio.com/cartItem/${newEmailId}.json`
  );
  const finalData = [];
  const objKeys = Object.keys(data === null ? {} : data);
  objKeys.forEach((keys) => {
    const objElement = data[keys];
    objElement.id = keys;
    finalData.push(objElement);
  });
  return finalData;
};
