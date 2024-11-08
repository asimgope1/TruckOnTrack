// Dashboard.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const vehicleData = [
    { id: '1', title: 'Car 1', status: 'On Trip', model: 'SUV 2022', latitude: 19.9919, longitude: 85.5329 },
    { id: '2', title: 'Bike 1', status: 'Available', model: 'Sport 2020', latitude: 28.5355, longitude: 77.3910 },
    { id: '3', title: 'Truck 1', status: 'On Trip', model: 'Heavy 2019', latitude: 28.4595, longitude: 77.0266 },
    { id: '4', title: 'Van 1', status: 'Maintenance', model: 'Mini Van 2021', latitude: 28.6139, longitude: 77.2090 },
    { id: '5', title: 'Bus 1', status: 'Available', model: 'Coach 2018', latitude: 26.8467, longitude: 80.9462 },
];

const Dashboard = ({ onSelectVehicle }) => {
    const totalVehicles = vehicleData.length;
    const vehiclesOnTrip = vehicleData.filter(vehicle => vehicle.status === 'On Trip').length;

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.vehicleCard} onPress={() => onSelectVehicle(item)}>
            <Text style={styles.vehicleTitle}>{item.title}</Text>
            <Text style={styles.vehicleDetails}>Status: {item.status}</Text>
            <Text style={styles.vehicleDetails}>Model: {item.model}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.floatingCard}>
                <Text style={styles.cardText}>Total Vehicles: {totalVehicles}</Text>
                <Text style={styles.cardText}>Vehicles on Trip: {vehiclesOnTrip}</Text>
            </View>
            <View
                style={{
                    marginTop: 25
                }}
            >
                <FlatList
                    data={vehicleData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContainer}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingCard: {
        backgroundColor: '#4CAF50',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        zIndex: 1,
    },
    cardText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    vehicleCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 5,
    },
    vehicleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    vehicleDetails: {
        fontSize: 14,
        color: '#666',
    },
});

export default Dashboard;
