import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, Alert } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import styles from '../../Styles/styles';
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = [
    { taskName: "Hacer la tarea de matemáticas", date: "2025-09-15" },
    { taskName: "Estudiar para el examen", date: "2025-09-20" },
    { taskName: "Entregar el proyecto", date: "2025-09-25" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>

      <ScrollView>
        {tasks.map((task,position) => (
          <View key={position} style={styles.taskContainer}>
            <Text style={styles.taskName}>{task.taskName}</Text>
            <Text style={styles.taskDate}>{task.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
export default TaskList;