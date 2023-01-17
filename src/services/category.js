import { BASE_URL } from "./configs";

export default get_categorise = async () => {
  const response = await fetch(`${BASE_URL}product/list_category`);
  const data = await response.json();
  if (data && data.length) return data;
  return [];
};
