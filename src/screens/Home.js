import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/UseResults';
import ResultsList from '../components/ResultsList';

const Home = (props) => {
    
    const [term, setTerm] = useState('');
    const [results, errorMessage, searchYelpApi] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(r => {
            return r.price === price;
        });
    } ;

    return (
        <> 
            <SearchBar 
                SearchTerm={term}
                onTermChange={setTerm}
                onTermSubmit={searchYelpApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                    navigation={props.navigation}
                />
                <ResultsList
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                    navigation={props.navigation}
                />
                <ResultsList
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                    navigation={props.navigation}
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender"
                    navigation={props.navigation}
                />
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({});

export default Home;