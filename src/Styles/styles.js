import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 15,
    padding: 5,
    borderRadius: 8,
  },
  buttonEdit: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 5,
    borderRadius: 8,
  },
  infoContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#6c757d",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "#333",
  },
  profileContainer: {
    padding: 20,
    alignItems: "center",
  },
  profileText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#444",
  },
  taskContainer: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  taskDate: {
    fontSize: 14,
    color: "gray",
  },
});

export default styles;