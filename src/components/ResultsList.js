import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ResultDetails from '../components/ResultDetails';

const ResultsList = ({ results, title, navigation }) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('ResultDetails', {
                            id: item.id
                        })}}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                        
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10
    }
});

export default ResultsList;