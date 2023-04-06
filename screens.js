import {Navigation} from 'react-native-navigation';
import {Button, SafeAreaView, Text, View} from 'react-native';

import ReactNativeBlobUtil from 'react-native-blob-util';
import React from "react";

function Tab1() {
    ReactNativeBlobUtil.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
        Authorization: "Bearer access token",
        "Dropbox-API-Arg":"{\"autorename\":false,\"mode\":\"add\",\"mute\":false,\"path\":\"/Test/testfile.png\",\"strict_conflict\":false}",
        "Content-Type": "application/octet-stream",
        "data-binary": "@local_file.png"
    }, ReactNativeBlobUtil.wrap('./testfile.png')).then((res) => console.log(res, res.info().status));
    return (
        <View>
            <Text>{'Ich bin Tab 1'}</Text>
        </View>
    )
}

function Tab2() {
    return (
        <View>
            <Text>{'Ich bin Tab 2'}</Text>
        </View>
    )
}

function Mainscreen() {
    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <Button
                onPress={loadRNN}
                title={'clickme'}
                color={'#000'}
            />
        </SafeAreaView>
    );
}

function loadRNN() {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                options: {
                    statusBar: {
                        style: 'dark',
                        backgroundColor: '#ff0066'
                    },
                    topBar: {
                        visible: true,
                        leftButtons: [
                            {id: 'menu', text: 'A', color: '#fff'}
                        ],
                        rightButtons: []
                    }
                },
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'pages.tab1',
                                id: 'Vacation'
                            }
                        }],
                        options: {
                            bottomTab: {
                                text: 'Tab 1'
                            },
                            topBar: {
                                title: {
                                    text: 'Tab 1',
                                    color: '#fff'
                                }
                            }
                        }
                    }
                },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'pages.tab2',
                                    id: 'Vacation'
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tab 2'
                                },
                                topBar: {
                                    title: {
                                        text: 'Tab 2',
                                        color: '#fff'
                                    }
                                }
                            }
                        }
                    }]


            }
        }
    });
}

export function registerScreens() {
    Navigation.registerComponent('pages.tab1', () => Tab1);
    Navigation.registerComponent('pages.tab2', () => Tab2);
    Navigation.registerComponent('main', () => Mainscreen);
}