import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'; // Import styles from styles.js

const SaveButton = () => {
  return (
    <TouchableOpacity style={styles.saveButton}>
      <Text style={styles.saveButtonText}>Save</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;