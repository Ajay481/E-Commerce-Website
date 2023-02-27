import axios from "axios";

export const getCartListService = async (newEmailId) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/cartItem?${newEmailId}`
  );
  return data;
};
