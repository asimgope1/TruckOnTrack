import React, { useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

const TripDetailsGrid = () => {
    // Animated value
    const translateX = useRef(new Animated.Value(-500)).current; // Start 500 units to the left

    useEffect(() => {
        // Trigger animation when the component mounts
        Animated.timing(translateX, {
            toValue: 0, // End at its original position
            duration: 500, // Animation duration in milliseconds
            useNativeDriver: true, // Use native driver for smoother performance
        }).start();
    }, [translateX]);

    return (
        <Animated.View
            style={{
                transform: [{ translateX }], // Apply the animation
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
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <View
                    style={{
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '33%',
                        height: '50%',
                        backgroundColor: '#E2C290',
                        padding: 5,
                        borderRadius: 15,
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                    >
                        10
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 14,
                        }}
                    >
                        Total vehicles
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '33%',
                        height: '50%',
                        backgroundColor: 'green', // Replace with ORGGREEN
                        padding: 5,
                        borderRadius: 15,
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                    >
                        10
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontWeight: '500',
                            fontSize: 14,
                        }}
                    >
                        Active vehicles
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '33%',
                        height: '50%',
                        backgroundColor: 'red', // Replace with RED
                        padding: 5,
                        borderRadius: 15,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                    >
                        10
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '500',
                            fontSize: 14,
                        }}
                    >
                        InActive vehicles
                    </Text>
                </View>
            </View>
        </Animated.View>
    );
};

export default TripDetailsGrid;
