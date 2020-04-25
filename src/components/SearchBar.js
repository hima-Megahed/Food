import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit}) => {
    
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.icon} color="black" />
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={onTermChange}
                value={searchTerm}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: "row",
        
    },
    input: {
        flex: 1,
        fontSize: 20
    },
    icon: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;