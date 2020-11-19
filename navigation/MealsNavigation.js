import {Platform} from 'react-native';
import { createAppContainer} from 'react-navigation';
// createStackNavigator, to pobierasz go ze react-navigation-stack
import {createStackNavigator} from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constans/Colors'

const MealsNavigator = createStackNavigator({
    
    Categories:{ screen: CategoriesScreen,
         navigationOptions:{
             headerTitle: 'Meal Categories',
        }
            },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions:{
        },
   
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions:{
            headerTitle: 'Meal Detail',
        }
    }
   
},
    {
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
              },
              headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
              headerTitle: 'A Screen'
        }
    }
);
export default createAppContainer(MealsNavigator);