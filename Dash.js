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
    Image,
    Modal,
} from 'react-native';
import React, { useState } from 'react';
import { Avatar, Icon } from '@rneui/themed';
import { HEIGHT } from './src/constants/config';
import { LIGHT, REGULAR } from './src/constants/fontfamily';
import { GREEN, ORGGREEN, RED } from './src/constants/color';
// import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

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
        duration: '2 hours',
        updatedOn: '2022-03-15 10:30 AM',
        status: 'Active',

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
        duration: '1 hour',
        updatedOn: '2022-03-15 10:30 AM',
        status: 'InActive',

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
        duration: '3 hours',
        updatedOn: '2022-03-15 10:30 AM',
        status: 'Active',
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
        duration: '1 hour',
        updatedOn: '2022-03-15 10:30 AM',
        status: 'InActive',
    },
    {
        id: '4',
        serialNo: 4,
        state: 'Cancelled',
        vehicleNo: 'TN01EF3456',
        address: 'Chenn, Tamil Nadu',
        speed: 0,
        distance: 0,
        gpsLocation: { latitude: 13.0827, longitude: 80.2707 },
        duration: '1 hour',
        updatedOn: '2022-03-15 10:30 AM',
        status: 'InActive',
    },
];

const VehicleCard = ({ item, setShowModal }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                setShowModal(true);
            }}
            style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 15,
                marginBottom: 15,
                width: '100%',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
            }}
        >
            {/* Top Row: Car Image and Vehicle Info */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with your image URL
                    style={{
                        width: 60,
                        height: 35,
                        borderRadius: 1,
                        marginRight: 15,
                    }}
                    resizeMode="cover"
                />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{item.vehicleNo}</Text>

                </View>


            </View>
            <View
                style={{
                    height: 1,
                    backgroundColor: '#ddd',
                    width: '100%',
                    marginVertical: 5,
                }}
            />

            {/* Grid of Icons */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Icon name="tachometer" type='font-awesome' size={24} color="#316163" />
                    <Text style={{ fontSize: 12, color: '#333' }}>Speed</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#333' }}>{item.speed} km/h</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="local-gas-station" size={24} color="#316163" />
                    <Text style={{ fontSize: 12, color: '#333' }}>Fuel Used</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#333' }}>{item.fuelUsed} L</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="road" type='font-awesome' size={24} color="#316163" />
                    <Text style={{ fontSize: 12, color: '#333' }}>Distance</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#333' }}>{item.distance} km</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="clock-o" type='font-awesome' size={24} color="#316163" />
                    <Text style={{ fontSize: 12, color: '#333' }}>Since</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#333' }}>{item.duration}</Text>
                </View>
            </View>

            {/* Address */}
            <Text style={{ fontSize: 12, color: '#666', marginVertical: 10 }}>{item.address}</Text>
            <View style={{ height: 1, backgroundColor: '#ddd', marginVertical: 5 }} />

            {/* Bottom Row: Updated Date/Time */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >

                <Text style={{ fontSize: 10, color: '#666', alignSelf: 'flex-end', fontFamily: REGULAR }}>
                    Updated on {item.updatedOn}
                </Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: item.status === 'Active' ? '#316163' : '#FF0000',
                        borderRadius: 5,
                        padding: 5,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                        {item.status}
                    </Text>
                </TouchableOpacity>



            </View>
        </TouchableOpacity>
    );
};


const Dash = () => {
    const [showModal, setShowModal] = useState(false);

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
                                    height: '15%',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '100%',
                                    }}>

                                    <View
                                        style={{
                                            // flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',

                                            width: '33%',
                                            height: '50%',
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
                                                fontSize: 14,
                                            }}>
                                            Total vehicles
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            // flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',

                                            width: '33%',
                                            height: '50%',
                                            backgroundColor: ORGGREEN,
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
                                            Active vehicles
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            // flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',

                                            width: '33%',
                                            height: '50%',
                                            backgroundColor: RED,
                                            padding: 5,
                                            borderRadius: 15,
                                        }}>
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                            }}>
                                            10
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: '500',
                                                fontSize: 14,
                                            }}>
                                            InActive vehicles
                                        </Text>
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
                                        height: HEIGHT * 0.75,
                                        paddingHorizontal: 10,
                                        // justifyContent: 'space-between',
                                        // marginBottom: 10,
                                        marginTop: 50,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            // marginBottom: 10,
                                            // marginTop: 10,
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


                                        {/* Scrollable Table Rows */}
                                        <FlatList
                                            data={tripData}
                                            keyExtractor={(item) => item.id.toString()}
                                            renderItem={({ item }) => <VehicleCard item={item} setShowModal={setShowModal} />}
                                        />
                                    </View>
                                </View>
                            </View>


                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                        setShowModal(false);
                    }}
                    style={{
                        flex: 1,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(100, 100, 100, 0.5)',
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            width: '100%',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            backgroundColor: 'rgba(100, 100, 100, 0.9)',
                        }}
                    >
                        <View
                            style={{
                                height: 150,
                                justifyContent: 'center',

                                backgroundColor: 'white',
                                borderRadius: 10,
                                padding: 15,
                                marginBottom: 15,
                                width: '100%',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.5,
                                elevation: 5,
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                                <View style={{ alignItems: 'center', margin: 10, }}>
                                    <Icon name="map" size={25} color="green" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'green',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Live Map</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="history" size={25} color="orange" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'orange',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >History</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="file" size={25} type='font-awesome' color="blue" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'blue',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Report</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="share" size={25} color="purple" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'purple',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Share</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="bell" size={25} type='font-awesome' color="red" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'red',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Notification</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="car" size={25} type='font-awesome' color="green" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'green',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Parking</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="map-marker" size={25} type='font-awesome' color="violet" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'violet',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Nearby</Text>
                                </View>
                                <View style={{ alignItems: 'center', margin: 10 }}>
                                    <Icon name="users" size={25} type='font-awesome' color="brown" />
                                    <Text
                                        style={{
                                            fontFamily: LIGHT,
                                            fontSize: 15,
                                            color: 'brown',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >Drivers</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                </Modal>
            </SafeAreaView>
        </>
    );
};

export default Dash;
