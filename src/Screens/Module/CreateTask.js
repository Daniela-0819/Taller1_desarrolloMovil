import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, Alert } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import styles from '../../Styles/styles';

const CreateTask = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [descripitionTask, setDescriptionTask] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      taskName.trim() !== '' &&
      descripitionTask.trim() !== '' &&
      subject.trim() !== '' &&
      date.trim() !== '';
    setFormValid(isValid);
  }, [taskName, descripitionTask, subject, date]);

  const handleSave = () => {
    if (!formValid) {
      Alert.alert('Error', 'Los campos con * son obligatorios', [{ text: 'OK' }]);
      return;
    }

    const profileTask = { taskName, descripitionTask, subject, date };
    navigation.navigate('ViewTask', { profile: profileTask });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput
              label="Nombre de la tarea*"
              value={taskName}
              onChangeText={setTaskName}
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
              mode="outlined"
            />

            <TextInput
              label="Descripción de la tarea*"
              value={descripitionTask}
              onChangeText={setDescriptionTask}
              style={styles.input}
              left={<TextInput.Icon icon="text" />}
              mode="outlined"
              multiline
            />

            <TextInput
              label="Asignatura de la tarea*"
              value={subject}
              onChangeText={setSubject}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Fecha de la tarea*"
              value={date}
              onChangeText={setDate}
              style={styles.input}
              left={<TextInput.Icon icon="calendar" />}
              mode="outlined"
            />

            <Button
              title="Guardar tarea"
              onPress={handleSave}
              disabled={!formValid}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                Los campos marcados con * son obligatorios
              </Text>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default CreateTask;
