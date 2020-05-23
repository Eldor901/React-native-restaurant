import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";
import GallerySwiper from "react-native-gallery-swiper";


const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResults = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }
    /*
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item})=>{
            return <Image source={{uri: item}} style={styles.image}/>
        }}
      />

      */
const imgList = (list) => {
    let gallery  = [
    ];

    for(let i = 0; i < list.length; i++)
    {
        const image = {uri: list[i]};
        gallery.push(image);
    }

    return gallery;
};

  return (
    <>
      <Text style={styles.text}>Name: {result.name}</Text>
      <View style={styles.gallerySwipe}>
      <GallerySwiper
            images={imgList(result.photos)} sensitiveScroll={false}/>
      </View>
      <View style={styles.addressView}>
        {result.location.address1 ? <Text style={styles.address}> Location is: {result.location.address1} </Text>: null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
    },

    gallerySwipe: {
        marginTop: 20,
        height: 400,
        flex: 5,
    },

    text: {
        marginBottom: 10,
        fontSize: 18,
        paddingLeft: 5,

    },


    addressView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        marginRight: 10,
    },

    address: {
        alignSelf: 'flex-end',
    },
});

export default ResultShowScreen;
