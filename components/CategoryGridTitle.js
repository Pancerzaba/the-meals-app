import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CategoryGridTitle = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View
                style={{
                    ...styles.container,
                    ...{ backgroundColor: props.color },
                }}
            >
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,

        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 10, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
        flex: 1,
        margin: 15,
        height: 150,
    },
})
