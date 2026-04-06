import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#b91c1c",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  closeBtn: {
    color: "#fff",
    fontSize: 18,
  },

  content: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    color: "#1f2937",
  },

  bullet: {
    fontSize: 14,
    marginBottom: 6,
    color: "#374151",
  },

  paragraph: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },

  bold: {
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#e5e7eb",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardText: {
    color: "#dc2626",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    marginTop: 20,
    color: "#9ca3af",
    fontSize: 12,
  },
});

export default styles;