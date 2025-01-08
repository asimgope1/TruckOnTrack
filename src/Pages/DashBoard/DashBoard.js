import { View, Text, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, FlatList } from 'react-native';
import React, { Fragment } from 'react';
import { MyStatusBar } from '../../constants/config';
import { WHITE } from '../../constants/color';
import { appStyles } from '../../styles/AppStyles';
import { Loader } from '../../components/Loader';
import Dash from '../../../Dash';
import { TextInput } from 'react-native-paper';

const DashBoard = ({ navigation }) => {

    const DATASET = [
        { sn: 1, name: 'A', age: 20 },
        { sn: 2, name: 'B', age: 20 },
        { sn: 3, name: 'C', age: 20 },
        { sn: 4, name: 'D', age: 20 },
        { sn: 5, name: 'E', age: 20 },
    ]
    return (
        <Fragment>
            <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
            <SafeAreaView style={appStyles.safeareacontainer}>
                {/* <Loader visible={loader} /> */}

                <KeyboardAvoidingView
                
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}>


                    {/* Render the Dash component */}
                    <Dash />

                </KeyboardAvoidingView>
            </SafeAreaView>
        </Fragment>
        // <>

        //     <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'red', justifyContent: 'space-evenly' }}>

        //         {/* <View
        //             style={{
        //                 width: 400,
        //                 height: 200,
        //                 backgroundColor: 'white',
        //                 alignSelf: 'center',

        //             }}
        //         >
        //             <FlatList
        //                 horizontal={true}
        //                 data={DATASET}
        //                 renderItem={({ item }) => {
        //                     console.log(item); // Logs each item to the console

        //                     // return (
        //                     //     <View
        //                     //         style={{
        //                     //             flexDirection: 'row',
        //                     //             alignSelf: 'center',
        //                     //             backgroundColor: 'yellow',
        //                     //             margin: 10,
        //                     //             height: 100,
        //                     //             width: 200,
        //                     //             justifyContent: 'space-evenly',
        //                     //             alignItems: 'center',
        //                     //             borderRadius: 10,
        //                     //         }}
        //                     //     >
        //                     //         <Text>{item.sn}</Text>
        //                     //         <Text>{item.name}</Text>
        //                     //     </View>
        //                     // );
        //                 }}
        //             // keyExtractor={(item) => item.id.toString()}
        //             />



        //         </View> */}
        //         <TextInput
        //             style={{
        //                 width: 400,
        //                 height: 200,
        //                 backgroundColor: 'white',
        //                 alignSelf: 'center',
        //                 margin: 10,
        //                 borderRadius: 10,
        //                 elevation: 5,
        //             }}
        //             placeholder='Enter your name'
        //         />
        //     </View>
        // </>
    );
}

export default DashBoard;
