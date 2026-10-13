import { createContext, useContext, useState } from "react";
import { Button, Text, View } from "react-native";

const ThemeContext = createContext<any>(null);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  return <Profile />;
}
function Profile() {
  return <UserCard />;
}
function UserCard() {
  return <UserName />;
}

function UserName() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  const setDarkMode = theme.setDarkMode;

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? "black" : "white" }}>
      <Text style={{ color: darkMode ? "white" : "black" }}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>

      <Button
        title={darkMode ? "Ubah ke Light Mode" : "Ubah ke Dark Mode"}
        onPress={() => setDarkMode(!darkMode)}
      />
    </View>
  );
}
