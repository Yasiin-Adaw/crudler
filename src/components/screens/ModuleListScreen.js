import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ----------------------
  LogBox.ignoreLogs([
    "non-serializable values were found in the navigation state"
  ]);

  // State ----------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers -----------------------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });

  // View -----------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});
export default ModuleListScreen;
