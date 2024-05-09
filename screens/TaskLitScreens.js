// screens/TaskListScreen.js

import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet, Text } from 'react-native';

const TaskListScreen = ({ navigation, route,newTask }) => {
  const [tasks, setTasks] = useState([]);
  

  // Function to add a new task
  const addTask = ( newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    
  };


  
  const handleAddTask = () => {
    navigation.navigate('AddEditTask', { addTask });
  };

  const handleTaskButtonClick = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        if (task.startTime === null) {
          return { ...task, startTime: new Date().toLocaleTimeString() };
        } else {
          return { ...task, finishTime: new Date().toLocaleTimeString() };
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            {item.name && <Text style={styles.taskName}>{item.name}</Text>}
            <View style={styles.buttonContainer}>
              <Button
                title={item.startTime ? 'Finish' : 'Start'}
                onPress={() => handleTaskButtonClick(item.id)}
              />
              <Button
                title="Remove"
                onPress={() => handleRemoveTask(item.id)}
              />
            </View>
            {item.startTime && <Text>Start: {item.startTime}</Text>}
            {item.finishTime && <Text>Finish: {item.finishTime}</Text>}
          </View>
        )}
        
        
        
      />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  taskName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
});

export default TaskListScreen;

