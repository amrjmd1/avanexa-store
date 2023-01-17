import { BASE_URL } from "./configs";

const _get_faqs_category = async () => {
  const response = await fetch(`${BASE_URL}faq/list_faq_category`);
  const data = await response.json();
  if (data && data.length) return data;
  return [];
};

const _get_faqs = async () => {
  const response = await fetch(`${BASE_URL}faq/list_faq`);
  const data = await response.json();
  if (data && data.length) return data;
  return [];
};

const get_faqs = async () => {
  const faqs_cats = await _get_faqs_category();
  const faqs = await _get_faqs();

  return faqs_cats.map((i) => {
    return {
      ...i,
      faqs: faqs.filter((faq) => i.faq_cat_id === faq.faq_cat_id),
    };
  });
};

export default get_faqs;
