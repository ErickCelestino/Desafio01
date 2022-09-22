import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    card: {
        paddingVertical: 58,
        paddingHorinzontal: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80,
        marginLeft: 15
    },
    title: {
        color: 'white',
        fontSize: 40
    },
    texts: {
        marginLeft: 30
    },
    subTitle: {
        color: 'white',
        fontSize: 14
    }
});


const Menu = ({title, subTitle, icon, bgColor, somar, value}) => {
    const cardStyle = { backgroundColor: bgColor}
    const callFunctioninParentComponent = () => {
        somar(value);
    }

    return(
        <TouchableOpacity
            style={[styles.card, cardStyle]}
            onPress={callFunctioninParentComponent}
        >
            <Image style={styles.icon} source={icon}/>
            <View style={styles.texts}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Menu;