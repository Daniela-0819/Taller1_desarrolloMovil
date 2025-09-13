import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Card, Avatar, Divider, List, FAB } from "react-native-paper";
import styles from "../../Styles/styles";

const ViewTask = ({ route, navigation }) => {
  const { profile } = route.params;

  useEffect(() => {
    console.log("Visualizando tarea:", profile.taskName);
  }, [profile.taskName]);

  const handleVolver = () => {
    navigation.goBack();
  };

  const getInitials = () => {
    return profile.taskName ? profile.taskName.charAt(0).toUpperCase() : "T";
  };

  return (
    <ScrollView>
      <View style={styles.profileHeader}>
        <Avatar.Text
          size={100}
          label={getInitials()}
          style={styles.avatar}
        />
        <Text style={styles.profileName}>{profile.taskName}</Text>
      </View>

      <View>
        <Card style={styles.profileCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Detalles de la Tarea</Text>
            <Divider style={styles.divider} />

            <List.Item
              title="Descripción"
              description={profile.descripitionTask}
              left={(props) => <List.Icon {...props} icon="text" />}
              style={styles.listItem}
            />

            <List.Item
              title="Asignatura"
              description={profile.subject}
              left={(props) => <List.Icon {...props} icon="book" />}
              style={styles.listItem}
            />

            <List.Item
              title="Fecha"
              description={profile.date}
              left={(props) => <List.Icon {...props} icon="calendar" />}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>
      </View>

      <View style={styles.metaInfo}>
        <Text onPress={() => navigation.navigate("EditTask", { profile })}>
          Editar Tarea
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <FAB
          style={styles.fab}
          icon="arrow-left"
          onPress={handleVolver}
          label="Volver"
        />
      </View>
    </ScrollView>
  );
};

export default ViewTask;
