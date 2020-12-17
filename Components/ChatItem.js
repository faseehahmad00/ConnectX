import React from 'react';
import Avatar from './Avatar';

import {
    View,
    Text,
    Image, StyleSheet,
} from 'react-native';
import { Container, Header,Button, Icon, Fab } from 'native-base';

export default function ChatItem (props) {
        return (
            <View
                style={styles.rceContainerCitem}
                onClick={props.onClick}
                onContextMenu={props.onContextMenu}>
                <View style={styles.rceCitem}>
                    <View style={styles.rceCitemAvatar}>
                        <Avatar
                            src={props.avatar}
                            alt={props.alt}
                            letterItem={props.letterItem}
                            sideElement={
                                props.statusColor &&
                                <View
                                    style={[styles.rceCitemStatus, {backgroundColor:props.statusColor}]}>
                                    <Text>
                                        {props.statusText}
                                    </Text>
                                </View>
                            }
                            type={'circle' && {'flexible': props.avatarFlexible}}/>
                    </View>

                    <View style={styles.rceCitemBody}>
                        <View style={styles.rceCitemBodyTop}>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.rceCitemBodyTopTitle}>
                                {props.title}
                            </Text>
                            <Text
                                style={styles.rceCitemBodyTopTime}
                                ellipsizeMode='tail'
                                numberOfLines={1}>
                                {
                                    props.date &&
                                    !isNaN(props.date) &&
                                    (
                                        props.dateString ||
                                        (props.date).toString()
                                    )
                                }
                            </Text>
                        </View>

                        <View style={styles.rceCitemBodyBottom}>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.rceCitemBodyTopTitle}>
                                {props.subtitle}
                            </Text>
                            {
                                props.unread > 0 &&
                                <View
                                    style={styles.rceCitemBodyBottomStatus}>
                                    <Text
                                        style={styles.rceCitemBodyBottomStatusText}>
                                        {props.unread}
                                    </Text>
                                </View>
                            }
                        </View>
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    rceContainerCitem: {
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: 240,
    },

    rceCitem: {
        position: 'relative',
        backgroundColor: '#444444',
        display: 'flex',
        flexDirection: 'row',
        height: 72,
        maxWidth: '100%',
        overflow: 'hidden',
        minWidth: 240,
        borderRadius:15,
    },

    rceCitemHover: {
        backgroundColor: '#f9f9f9',
    },

    rceCitemAvatar: {
        position: 'relative',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 13,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },

    rceCitemStatus: {
        width: 20,
        height: 20,
        bottom: -1,
        right: -1,
        position: 'absolute',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        overflow: 'hidden',
    },

    rceCitemAvatarImg: {
        width: 50,
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 25,
        overflow: 'hidden',
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 50,
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
    },

    rceCitemBody: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.05)',
        overflow: 'hidden',
    },

    rceCitemBodyTop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    rceCitemBodyBottom: {
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    rceCitemBodyTopTitle: {
        flex: 1,
        color:"#EEEEEE",
        overflow: 'hidden',
        fontSize: 16,
    },

    rceCitemBodyBottomTitle: {
        flex: 1,
        color: '#555',
        fontSize: 15,
    },

    rceCitemBodyTopTime: {
        fontSize: 12,
        color: '#EEEEEE',
        marginLeft: 5,
        maxWidth: 100,
        justifyContent: 'flex-start',
    },

    rceCitemBodyBottomStatus: {
        display: 'flex',
        width: 20,
        height: 20,
        marginLeft: 3,
        backgroundColor: 'goldenrod',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        overflow: 'hidden',
    },

    rceCitemBodyBottomStatusText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
        backgroundColor: 'transparent',
    },
});