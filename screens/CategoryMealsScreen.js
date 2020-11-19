import React, {Fragment} from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

 import { CATEGORIES } from '../data/dummy-data';
 import Colors from '../constans/Colors'

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectCategory  = CATEGORIES.find(item => item.id === catId);

    return (
        <View style={styles.screen}>
             <Text>{selectCategory.title}</Text>
            <Text>"The Categories Meals Screen!"</Text>
           
            <Button title="Go to Details!" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' })
            }} />
            <Button title="Go Back!" onPress={() => {
                props.navigation.pop()
            }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
  
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
    return {
      headerTitle: selectedCategory.title,
      
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default CategoryMealsScreen