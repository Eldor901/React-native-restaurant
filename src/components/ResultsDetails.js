import React from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'


const ResultsDetails = ({result}) => {


    if(!result.image_url)
    {
        return null;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text>{result.name}</Text>
            <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 8,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default ResultsDetails;
