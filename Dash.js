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
    {
        id: '1',
        serialNo: 1,
        state: 'On Going',
        vehicleNo: 'MH12AB1234',
        address: 'Mumbai, Maharashtra',
        speed: 60,
        distance: 150,
        gpsLocation: { latitude: 19.076, longitude: 72.8777 },
    },
    {
        id: '2',
        serialNo: 2,
        state: 'Upcoming',
        vehicleNo: 'DL8CAB5678',
        address: 'Delhi, India',
        speed: 0,
        distance: 200,
        gpsLocation: { latitude: 28.7041, longitude: 77.1025 },
    },
    {
        id: '3',
        serialNo: 3,
        state: 'Completed',
        vehicleNo: 'KA03CD9876',
        address: 'Bangalore, Karnataka',
        speed: 0,
        distance: 120,
        gpsLocation: { latitude: 12.9716, longitude: 77.5946 },
    },
    {
        id: '4',
        serialNo: 4,
        state: 'Cancelled',
        vehicleNo: 'TN01EF3456',
        address: 'Chennai, Tamil Nadu',
        speed: 0,
        distance: 0,
        gpsLocation: { latitude: 13.0827, longitude: 80.2707 },
    },
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
                                    flex: 1,
                                }}
                            >
                                <View
                                    style={{
                                        width: '95%',
                                        height: '80%',
                                        paddingHorizontal: 10,
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        marginTop: 40,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginBottom: 10,
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                marginBottom: 10,
                                                marginTop: 10,
                                                marginLeft: 15,
                                            }}
                                        >
                                            On Going Trips
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            width: '105%',
                                            height: '85%',
                                            justifyContent: 'space-evenly',
                                            alignSelf: 'center',
                                            marginBottom: 10,
                                        }}
                                    >
                                        {/* Fixed Table Header */}
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                backgroundColor: '#316163',
                                                padding: 15,
                                                borderTopLeftRadius: 8,
                                                borderTopRightRadius: 8,
                                            }}
                                        >
                                            <Text style={{ width: '10%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>S.No</Text>
                                            <Text style={{ width: '15%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>State</Text>
                                            <Text style={{ width: '15%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>Vehicle No</Text>
                                            <Text style={{ width: '20%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>Address</Text>
                                            <Text style={{ width: '10%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>Speed</Text>
                                            <Text style={{ width: '10%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>Distance</Text>
                                            <Text style={{ width: '20%', fontSize: 14, fontWeight: 'bold', color: 'white' }}>GPS</Text>
                                        </View>

                                        {/* Scrollable Table Rows */}
                                        <ScrollView style={{ flex: 1 }}>
                                            <FlatList
                                                data={tripData}
                                                keyExtractor={(item) => item.id.toString()}
                                                renderItem={({ item, index }) => (
                                                    <TouchableOpacity
                                                        style={{
                                                            marginBottom: 10,
                                                            width: '100%',
                                                            padding: 15,
                                                            backgroundColor: 'white',
                                                            borderBottomWidth: 1,
                                                            borderColor: '#ddd',
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        {/* Column 1: Serial No. */}
                                                        <Text style={{ width: '10%', fontSize: 14, color: '#000' }}>{index + 1}</Text>

                                                        {/* Column 2: State */}
                                                        <Text style={{ width: '15%', fontSize: 14, color: '#000' }}>{item.state}</Text>

                                                        {/* Column 3: Vehicle No. */}
                                                        <Text style={{ width: '15%', fontSize: 14, color: '#000' }}>{item.vehicleNo}</Text>

                                                        {/* Column 4: Address */}
                                                        <Text style={{ width: '20%', fontSize: 14, color: '#000' }}>{item.address}</Text>

                                                        {/* Column 5: Speed */}
                                                        <Text style={{ width: '10%', fontSize: 14, color: '#000' }}>{item.speed} km/h</Text>

                                                        {/* Column 6: Distance */}
                                                        <Text style={{ width: '10%', fontSize: 14, color: '#000' }}>{item.distance} km</Text>

                                                        {/* Column 7: GPS Location */}
                                                        <TouchableOpacity
                                                            style={{
                                                                width: '20%',
                                                                backgroundColor: '#85B2B5',
                                                                padding: 5,
                                                                borderRadius: 15,
                                                                alignItems: 'center',
                                                            }}
                                                            onPress={() => {
                                                                // Handle GPS Location press, e.g., open a map view
                                                            }}
                                                        >
                                                            <Text style={{ color: 'white', fontSize: 12 }}>View Location</Text>
                                                        </TouchableOpacity>
                                                    </TouchableOpacity>
                                                )}
                                            />
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>


                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
};

export default Dash;
