import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { Text } from 'react-native';


export default function DropDown({ visible = false, setVisible }) {
    console.log(visible);
    if (!visible) return null;
    // const [workoutType, setWorkoutType] = useState("Weight Moved");
    return (
        <Modal animationType="slide"
            transparent="true"
            visible={visible}
            onRequestClose={setVisible(false)}>
            <Text>Hi</Text>
            {/* <Picker selectedValue={workoutType}
                onValueChange={(itemValue, itemIndex) => setWorkoutType(itemValue)}>
                <Picker.Item label="Bench Press" value="Weight Moved" />
                <Picker.Item label="Squat" value="Distance Travelled" />
                <Picker.Item label="Dead Lift" value="Time Taken" />
            </Picker> */}
        </Modal>
    );
}

DropDown.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func
};