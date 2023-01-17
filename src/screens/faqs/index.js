import React, { memo, useEffect, useState } from "react";
import { get_faqs } from "./../../services";
import { ScrollView, Text } from "react-native";
import FaqWrap from "./components/FaqWrap";

const Faqs = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get_faqs().then((data) => setData(data || []));
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
      }}
    >
      {data.map((item, idx) => {
        return <FaqWrap key={idx} data={item} />;
      })}
    </ScrollView>
  );
});

export default Faqs;
