import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native'

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
        height: 150,
        borderRadius: 10,
        overflow:
            Platform.OS === 'android' && Platform.Version >= 21
                ? 'hidden'
                : 'visible',
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 10, height: 2 },
        shadowRadius: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,

        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right',
        flex: 1,
        margin: 15,
        height: 150,
    },
})
