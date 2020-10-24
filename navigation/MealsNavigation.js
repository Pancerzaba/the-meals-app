import { createAppContainer} from 'react-navigation';
// createStackNavigator, to pobierasz go ze react-navigation-stack
import {createStackNavigator} from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
});
export default createAppContainer(MealsNavigator);