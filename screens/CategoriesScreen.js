import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import {CATEGORIES} from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'

const renderGridItem = itemData =>{
return<View style={styles.gridItem}>
    <Text>{itemData.item.title}</Text></View>
}

const CategoryScreen = props => {
    return (
        <FlatList keyExtractor={(item, index)=> item.id} data={CATEGORIES} renderItem={renderGridItem} numColums={2}/>

        // <View style={styles.screen}>
        //     <Text>The Categories Screen!</Text>
        //     <Button title="Go to Meals!" onPress={()=>{
        //         props.navigation.navigate({routeName: 'CategoryMeals'})
        //     }}/>
        // </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex:1,
        margin: 15,
        height: 150
    }
})

export default CategoryScreen