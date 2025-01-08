// App.js
// import React, { useState } from 'react';
// import { SafeAreaView, StatusBar, useColorScheme, StyleSheet } from 'react-native';
// import Dashboard from './Dashboard';
// import VehicleMap from './VehicleMap';
// import Dash from './Dash';

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? '#333' : '#fff',
//   };

//   const handleSelectVehicle = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setSelectedLocation({
//       latitude: vehicle.latitude,
//       longitude: vehicle.longitude,
//     });
//   };

//   return (
//     <SafeAreaView style={[styles.container, backgroundStyle]}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <Dashboard onSelectVehicle={handleSelectVehicle} />
//       {selectedLocation ? (
//         <VehicleMap selectedVehicle={selectedVehicle} selectedLocation={selectedLocation} />
//       ) : (
//         <></>
//       )}
//       {/* <Dash /> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;


// import { View, Text } from 'react-native';
// import React from 'react';
// import Navigation from './src/navigation/Navigation';

// const App = () => {
//   return <Navigation />;
// };

// export default App;
import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App
