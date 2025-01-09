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
import VehicleCard from './VehicleCard';
import TripDetailsGrid from './TripDetailsGrid';
// import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

const tripData = [
    { id: '1', label: 'On Going Trips', value: '10', color: '#316163' },
    { id: '2', label: 'Upcoming Trips', value: '10', color: '#316163' },
    { id: '3', label: 'Completed Trips', value: '5', color: '#316163' },
    { id: '4', label: 'Cancelled Trips', value: '0', color: '#316163' },
    { id: '4', label: 'Cancelled Trips', value: '0', color: '#316163' },
];

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
                            <TripDetailsGrid />

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
