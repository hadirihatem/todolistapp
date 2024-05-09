// // App.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import AddEditTaskScreen from './screens/AddEditTaskScreen';
// import TaskListScreen from './screens/TaskLitScreens';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="TaskList">
//         <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Task List' }} />
//         <Stack.Screen name="AddEditTask" component={AddEditTaskScreen} options={{ title: 'Add/Edit Task' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// App.js

import React from 'react';
import TodoList from './TodoList';


const App = () => {
  return (
    <TodoList />
  );
};

export default App;
