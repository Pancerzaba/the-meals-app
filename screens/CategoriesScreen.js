import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity , Platform} from 'react-native'

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constans/Colors';
import CategoryGridTitle from '../components/CategoryGridTitle'



const CategoriesScreen = props => {
    const renderGridItem = itemData => {
      return (
        <CategoryGridTitle 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>{
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }}/>
      );
    };
  
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
      height: 150,
      
  },
 
})

export default CategoriesScreen