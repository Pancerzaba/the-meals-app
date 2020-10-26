import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity , Platform} from 'react-native'

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constans/Colors';



const CategoriesScreen = props => {
const renderGridItem = itemData =>{
    return(<TouchableOpacity style={styles.gridItem}
        onPress={()=>{
        props.navigation.navigate({routeName: 'CategoryMeals'})
        }}>
            <View >
            <Text>{itemData.item.title}</Text></View>
        </TouchableOpacity>)
}
    return (
        <FlatList keyExtractor={(item, index)=> item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>

        // <View style={styles.screen}>
        //     <Text>The Categories Screen!</Text>
        //     <Button title="Go to Meals!" onPress={()=>{
        //         props.navigation.navigate({routeName: 'CategoryMeals'})
        //     }}/>
        // </View>
    )
}

CategoriesScreen.navigationOptions={
    headerTitle: 'Meals Categories ',
    headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primary : ''
    },
    headerTintColor:  Platform.OS ==='android' ? 'white' : Colors.primary 
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

export default CategoriesScreen