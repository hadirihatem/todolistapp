// screens/AddEditTaskScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddEditTaskScreen = ({ navigation, route }) => {
  const [taskName, setTaskName] = useState('');
// AddEditTaskScreen.js
const handleSaveTask = () => {
  const taskNameValue = taskName.trim(); // Trim leading and trailing whitespace

  // Save the task
  const newTask = {
    id: Math.random().toString(),
    name: taskNameValue, // Set the name explicitly
    startTime: null,
    finishTime: null,
  };
  console.log(newTask); // Log to check the object

  route.params.addTask(newTask);
  navigation.goBack();
};


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleSaveTask} title="Save" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
    <TextInput
    style={styles.input}
    placeholder="Enter task name"
    value={taskName}
    onChangeText={(text) => {
      console.log('Text entered:', text); // Add this line for logging
      setTaskName(text);
    }}
  />
  
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default AddEditTaskScreen;
