import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="information-circle"
        size={50}
        color="#2563eb"
        style={styles.iconCenter}
      />
      <Text style={styles.title}>Hello World</Text>

      <TextInput placeholder="Type here..." style={styles.input} />

      <Pressable style={styles.customButton} onPress={() => alert("Clicked!")}>
        <Ionicons
          name="hand-left"
          size={20}
          color="white"
          style={{ marginRight: 5 }}
        />
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>

      <Link href="/usecontext_example" asChild>
        <Pressable style={styles.exampleButton}>
          <Text style={styles.buttonText}>penerapan codelab-1</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f2fe",
    justifyContent: "center",
    padding: 20,
  },
  iconCenter: {
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 26,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 28,
  },
  customButton: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  exampleButton: {
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
