import { BASE_URL } from "./configs";

export default get_products = async () => {
  const response = await fetch(`${BASE_URL}product/list_products`);
  const data = await response.json();
  if (data && data.length) return data;
  return [];
};
