import React, { useState, useEffect } from 'react';
import { Text, FlatList, Image, StyleSheet } from 'react-native';
import Yelp from '../api/Yelp';

const ResultDetailsScreen = (props) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResultById(props.route.params.id);
    }, []);


    const getResultById = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setResult(response.data);
    };
    
   if(!result)
   {
       return null;
   }

    return (
        <>
            <Text>Details screen</Text>
            
            <FlatList data={result.photos} keyExtractor={(photo) => photo} renderItem={({item}) => {
                
                return <Image style={styles.image} source={{uri: item}}/>
            }} 
                
            />   
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        marginVertical: 10,
        width: 200,
        height: 150
    }
});

export default ResultDetailsScreen;