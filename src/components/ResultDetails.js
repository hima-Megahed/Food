import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
    //console.log(result);
    return (
        <View style={styles.layout}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.title}>{result.name}</Text>
            <Text >{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        marginRight: 10,
        marginVertical: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    image: {
        width: 250,
        height: 150,
        borderWidth: 5,
        borderRadius: 4
    }
});

export default ResultDetails;