import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Function to fetch tasks from AsyncStorage
    const fetchTasks = async () => {
      try {
        const tasksData = await AsyncStorage.getItem('tasks');
        if (tasksData !== null) {
          // If tasks data exists, parse it and set it to the state
          const parsedTasks = JSON.parse(tasksData);
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    // Call fetchTasks function when component mounts
    fetchTasks();
  }, []);

  return (
    <View>
      {/* Map through tasks array to display each task */}
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{`Task ${index + 1}:`}</Text>
          <Text>{`name:${task.name} - Start: ${task.startTime} - Finish: ${task.finishTime}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default DisplayScreen;
