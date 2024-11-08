import {
    View,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    SafeAreaView,
    Text,
    FlatList,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Avatar, Icon } from '@rneui/base';

const tripData = [
    { id: '1', label: 'On Going Trips', value: '10', color: '#316163' },
    { id: '2', label: 'Upcoming Trips', value: '10', color: '#316163' },
    { id: '3', label: 'Completed Trips', value: '5', color: '#316163' },
    { id: '4', label: 'Cancelled Trips', value: '0', color: '#316163' },
];

const Dash = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#316163" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#316163' }}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        scrollEnabled={false}>
                        <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
                            {/* Header Container */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '95%',
                                    paddingVertical: 25,
                                    paddingHorizontal: 10,
                                    backgroundColor: '#316163',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.5,
                                    borderRadius: 8,
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Avatar
                                        size="medium"
                                        rounded
                                        source={{
                                            uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            marginLeft: 10,
                                        }}>
                                        Welcome, User Name!{'\n'}
                                        Last login: 2022-03-15 10:30 AM
                                    </Text>
                                </View>
                                <Icon
                                    name="notifications"
                                    type="AntDesign"
                                    color="white"
                                    size={25}
                                />
                            </View>

                            {/* Trip Details Grid */}
                            <View
                                style={{
                                    position: 'absolute', // Make it float over the vehicle list
                                    top: 110, // Adjust this value to position it correctly
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    width: '88%',
                                    borderRadius: 10,
                                    zIndex: 999,
                                    elevation: 5,
                                    padding: 4,
                                    height: '20%',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '50%',
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '70%',
                                            height: '100%',
                                            padding: 5,
                                        }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontWeight: '600',
                                                fontSize: 13,
                                            }}>
                                            User name abcd efgh ujkl mno pqrst uvwxyz
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            // flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',

                                            width: '30%',
                                            height: '100%',
                                            backgroundColor: '#E2C290',
                                            padding: 5,
                                            borderRadius: 15,
                                        }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                            }}>
                                            10
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontWeight: '500',
                                                fontSize: 14,
                                            }}>
                                            Total vehicles
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '50%',
                                        // backgroundColor: 'blue',
                                    }}>
                                    <View
                                        style={{
                                            // flexDirection: 'row',
                                            // backgroundColor: 'red',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '40%',
                                            height: '100%',
                                        }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >



                                            <Icon name="directions-car" />

                                            <Text>Active Vehicles</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '40%',
                                            height: '100%',
                                        }}
                                    >


                                        <Icon name="directions-car" />
                                        <Text>InActive Vehicles</Text>

                                    </View>
                                </View>
                            </View>

                            {/* Vehicle List */}
                            <View
                                style={{
                                    backgroundColor: '#C5CED3',
                                    paddingVertical: 15,
                                    paddingHorizontal: 10,
                                    borderTopRightRadius: 25,
                                    borderTopLeftRadius: 25,

                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 80,
                                    width: '100%',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.5,
                                    elevation: 5,
                                    // marginBottom: 20,
                                    flex: 1,
                                }}>
                                <View
                                    style={{
                                        width: '95%',
                                        height: '80%',
                                        paddingHorizontal: 10,
                                        justifyContent: 'space-between',
                                        // backgroundColor: 'red',
                                        marginBottom: 10,
                                        marginTop: 40,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            // justifyContent: '',
                                            alignItems: 'center',
                                            marginBottom: 10,
                                            marginTop: 10,
                                        }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                marginBottom: 10,
                                                marginTop: 10,
                                                marginLeft: 15,
                                            }}>
                                            On Going Trips
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            width: '105%',
                                            height: '85%',
                                            paddingHorizontal: 10,
                                            justifyContent: 'center',
                                            // backgroundColor: 'green',
                                            alignSelf: 'center',
                                            marginBottom: 10,
                                        }}>
                                        <FlatList
                                            data={tripData}
                                            keyExtractor={item => item.toString()}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    style={{
                                                        marginBottom: 10,
                                                        width: '100%',
                                                        justifyContent: 'space-between',
                                                        padding: 15,
                                                        backgroundColor: 'white',
                                                        borderRadius: 8,
                                                        height: 105,
                                                        marginTop: 10,
                                                        flexDirection: 'row',
                                                    }}>
                                                    <View
                                                        style={{
                                                            width: '60%',
                                                            height: '100%',
                                                            justifyContent: 'center',
                                                            alignItems: 'flex-start',
                                                            marginLeft: 10,
                                                            // backgroundColor: 'yellow',
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                fontWeight: 'bold',
                                                                marginBottom: 5,
                                                                marginTop: 5,
                                                                marginLeft: 5,
                                                                color: '#000',
                                                                // backgroundColor: 'green',
                                                            }}>
                                                            Vehicle {item.id}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                fontWeight: 'bold',
                                                                marginBottom: 5,
                                                                marginTop: 5,
                                                                marginLeft: 5,
                                                                color: '#000',
                                                                // backgroundColor: 'green',
                                                            }}>
                                                            Driver
                                                        </Text>

                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                fontWeight: 'bold',
                                                                marginBottom: 5,
                                                                marginTop: 5,
                                                                marginLeft: 5,
                                                                color: '#000',
                                                                // backgroundColor: 'green',
                                                            }}>
                                                            Time:
                                                        </Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                            // flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',

                                                            width: '25%',
                                                            // height: '100%',
                                                            backgroundColor: '#85B2B5',
                                                            padding: 5,
                                                            borderRadius: 15,
                                                        }}></View>
                                                </TouchableOpacity>
                                            )}
                                        />
                                    </View>
                                </View>
                                {/* Add your vehicle list items here */}
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
};

export default Dash;
