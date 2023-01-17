import React, { memo, useEffect, useState } from "react";
import { get_products, get_categorise } from "../../services";
import {
  ActivityIndicator,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Card, FAB, Chips } from "./../../components";
import { Picker, onOpen } from "react-native-actions-sheet-picker";

const Home = memo(() => {
  const [data, setData] = useState([]);
  const [filterd_data, setFilterdData] = useState();

  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [selectedBrand, setSelectedBrand] = useState(undefined);
  const [selectedModel, setSelectedModel] = useState(undefined);

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    get_categorise().then((data) => setFilters(data || []));
  }, []);

  useEffect(() => {
    get_products().then((data) => setData(data || []));
  }, []);

  useEffect(() => {
    if (selectedCategory && data?.length) {
      setFilterdData(
        data.filter((i) => i.product_category === selectedCategory.category_id)
      );
    } else setFilterdData(undefined);
  }, [selectedCategory, data]);

  useEffect(() => {
    if (selectedBrand) {
      setFilterdData((prev) =>
        prev.filter((i) => i.product_brand === selectedBrand.brand_id)
      );
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      setFilterdData((prev) =>
        prev.filter((i) => i.product_model === selectedModel.model_id)
      );
    }
  }, [selectedModel]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ecf0f1",
      }}
    >
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Chips
            text={selectedCategory?.name || "Select Category"}
            color={"#9b59b6"}
            icon="grid"
            onPress={() => onOpen("category")}
          />
          {!!selectedCategory && (
            <Chips
              text={selectedBrand?.name || "Select Brand"}
              color={"#2980b9"}
              icon="award"
              onPress={() => onOpen("brands")}
            />
          )}
          {!!selectedBrand && (
            <Chips
              text={selectedModel?.name || "Select Model"}
              color={"#e67e22"}
              icon="box"
              onPress={() => onOpen("modles")}
            />
          )}
        </ScrollView>
      </View>
      <Picker
        id="category"
        data={filters}
        label="Select Category"
        setSelected={(data) => {
          setSelectedCategory(data);
          setSelectedBrand(undefined);
          setSelectedModel(undefined);
        }}
      />
      <Picker
        id="brands"
        data={selectedCategory?.brands || []}
        label="Select Brand"
        setSelected={(data) => {
          setSelectedBrand(data);
          setSelectedModel(undefined);
        }}
      />
      <Picker
        id="modles"
        data={
          selectedBrand?.model
            ? selectedBrand.model.map((i) => {
                return { ...i, name: i.model_name };
              })
            : []
        }
        label="Select Model"
        setSelected={setSelectedModel}
      />
      <FlatList
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        data={filterd_data || data}
        renderItem={({ item }) => <Card data={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          if (data?.length) return <Text>No Data Found</Text>;
          return <ActivityIndicator />;
        }}
      />
      <FAB />
    </View>
  );
});

export default Home;
