// TodoList.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false, startTime: null, endTime: null, isStandard: true },
    { id: 2, title: 'Task 2', completed: false, startTime: null, endTime: null, isStandard: true },
    // Add more standard tasks as needed
  ]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    const newTask = { id: Date.now(), title: task, completed: false, startTime: null, endTime: null, isStandard: false };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleToggleStart = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, startTime: new Date().toLocaleTimeString() } : task
    );
    setTasks(updatedTasks);
  };

  const handleToggleFinish = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, endTime: new Date().toLocaleTimeString() } : task
    );
    setTasks(updatedTasks);
  };

  const handleResetTime = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, startTime: null, endTime: null } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Task"
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <TouchableOpacity onPress={() => handleToggleStart(item.id)} disabled={item.startTime}>
              <Text style={[styles.taskText, item.completed && styles.completed]}>
                {item.title}
              </Text>
            </TouchableOpacity>
            {!item.isStandard && (
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <Text style={styles.deleteButton}>Remove</Text>
              </TouchableOpacity>
            )}
            {item.startTime && <Text style={styles.timeText}>{`Started: ${item.startTime}`}</Text>}
            {item.endTime && <Text style={styles.timeText}>{`Finished: ${item.endTime}`}</Text>}
            {item.isStandard && (
              <TouchableOpacity onPress={() => handleResetTime(item.id)}>
                <Text style={[styles.buttonText, styles.resetButton]}>Reset</Text>
              </TouchableOpacity>
            )}
            {!item.startTime && (
              <TouchableOpacity onPress={() => handleToggleStart(item.id)}>
                <Text style={[styles.buttonText, styles.startButton]}>Start</Text>
              </TouchableOpacity>
            )}
            {item.startTime && !item.endTime && (
              <TouchableOpacity onPress={() => handleToggleFinish(item.id)}>
                <Text style={[styles.buttonText, styles.finishButton]}>Finish</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 60,
   
    backgroundColor: '#f0f0f0',
  },
  input: {

    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 3,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    color: '#dc3545',
    marginLeft: 10,
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
  },
  startButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  finishButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  resetButton: {
    backgroundColor: '#6c757d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default TodoList;
