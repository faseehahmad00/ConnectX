import React from 'react';
import {View, Image, StyleSheet,} from 'react-native';

export default function Avatar (props){
        const size = props.size;
        return (
            <View style={styles.rceAvatarContainer}>
                <Image source={props.src}
                    style={[
                        styles.rceAvatarDefault,
                        size && { width: size.width, height: size.height },
                    ]}
                   />
                {props.sideElement}
            </View>
        );
}

const styles =  StyleSheet.create({
    rceAvatarContainer: {
        height:65,
        width:65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:100,
        borderWidth:0.5,
        borderColor:"#AAA"
    },

    rceAvatarDefault: {
        width: 50,
        height: 50,
    },

    rceAvatarContainerFlexibleRceAvatar: {
        height: 'auto',
        width: '100%',
    },

    rceAvatarContainerRounded: {
        borderRadius: 5,
    },

    rceAvatarContainerCircle: {
        borderRadius: 100,
    },

    rceAvatarContainerXsmall: {
        width: '30px',
        height: '30px',
    },

    rceAvatarContainerSmall: {
        width: '35px',
        height: '35px',
    },

    rceAvatarContainerMedium: {
        width: '40px',
        height: '40px',
    },

    rceAvatarContainerLarge: {
        width: '45px',
        height: '45px',
    },

    rceAvatarContainerXlarge: {
        width: '55px',
        height: '55px',
    },
});

