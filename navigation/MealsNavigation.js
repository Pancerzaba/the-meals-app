import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
// createStackNavigator, to pobierasz go ze react-navigation-stack
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicon, Ionicons } from '@expo/vector-icons'
import React from 'react'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouritesScreen from '../screens/FavouriteScrean'
import Colors from '../constans/Colors'

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Meal Categories',
            },
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
            navigationOptions: {},
        },
        MealDetail: {
            screen: MealDetailScreen,
            navigationOptions: {
                headerTitle: 'Meal Detail',
            },
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === 'android' ? Colors.primary : '',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitle: 'A Screen',
        },
    }
)

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-restaurant"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    )
                },
            },
        },
        Favourites: {
            screen: FavouritesScreen,
            navigationOptions: {
                tabBarLabel: 'Favorites!',
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-star"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    )
                },
            },
        },
    },
    {
        tabBarOptions: {
            inactiveTintColor: Colors.primary,
        },
    }
)

export default createAppContainer(MealsFavTabNavigator)
