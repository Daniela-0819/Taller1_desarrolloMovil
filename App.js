import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import {PaperProvider} from 'react-native-paper'
import CreateTask from './src/Screens/Module/CreateTask'
import EditTask from './src/Screens/Module/EditTask'
import TaskList from './src/Screens/Module/TaskList'
import ViewTask from './src/Screens/Views/ViewTask'

const Stack = createNativeStackNavigator();

export default function App () {
  return(
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CreateTask">
            <Stack.Screen
              name="CreateTask"
              component={CreateTask}
              options={{title: 'Crear Tarea'}}
            />
            <Stack.Screen
              name="ViewTask"
              component={ViewTask}
              options={{title: 'Ver Tarea'}}
            />
            
            <Stack.Screen 
              name="EditTask" 
              component={EditTask} 
              options={{title: 'Editar Tarea'}}
            />
            <Stack.Screen
              name="TaskList"
              component={TaskList}
              options={{title: 'Lista de Tareas'}}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
};