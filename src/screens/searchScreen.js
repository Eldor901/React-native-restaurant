import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";


const SearchScreen = () => {

  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMassage] = useResults();

  const filterResultByPrice = (price) =>{
      return results.filter(result => {
          return result.price === price;
      })
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={()=>SearchApi(term)}
      />
      {errorMassage ? <Text>{errorMassage}</Text>: null}
      <ScrollView showsVerticalScrollIndicator={false}>
          <ResultList  results={filterResultByPrice('£')} title="Cost Effective"/>
          <ResultList  results={filterResultByPrice('££')} title="Bit Pricier"/>
          <ResultList  results={filterResultByPrice('£££')} title="Bit Spender"/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
