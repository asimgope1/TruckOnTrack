import { View, Text, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
import React, { Fragment } from 'react';
import { MyStatusBar } from '../../constants/config';
import { WHITE } from '../../constants/color';
import { appStyles } from '../../styles/AppStyles';
import { Loader } from '../../components/Loader';
import Dash from '../../../Dash';

const DashBoard = ({ navigation }) => {
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
    );
}

export default DashBoard;
