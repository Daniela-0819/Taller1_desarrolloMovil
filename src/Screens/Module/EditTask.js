import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import styles from "../../Styles/styles";

const EditTask = ({ route, navigation }) => {
  const { profile } = route.params;
  
   const [taskName, setTaskName] = useState('');
    const [descripitionTask, setDescriptionTask] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');

    const handleSave = () => {
    const updatedTask = { taskName, descripitionTask, subject, date};
    // Pasamos los nuevos datos al volver
    navigation.navigate("ViewTask", { profile: updatedTask});
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Editar Perfil</Text>

        <Card style={styles.card}>
          <Card.Content>
            <TextInput
              label={'Nombre de la Tarea'}
              value={taskName}
              onChangeText={setTaskName}
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
              mode='outlined'
              Placeholder="Nombre tarea"

            />
            
            <TextInput
              label={'Descripcion de la Tarea'}
              value={descripitionTask}
              onChangeText={setDescriptionTask}
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
              mode='outlined'
              Placeholder="Descripcion tarea"

            />

            <TextInput
              label={'Asignatura de la Tarea'}
              value={subject}
              onChangeText={setSubject}
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
              mode='outlined'
              Placeholder="Asignatura tarea"

            />

            <TextInput
              label={'Fecha de la Tarea'}
              value={date}
              onChangeText={setDate}
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
              mode='outlined'
              Placeholder="fecha tarea"

            />
            <Button 
              title="Guardar Cambios" 
              mode="contained"
              onPress={handleSave}
              style={styles.buttonEdit}
           />
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );

};//cierre
export default EditTask;