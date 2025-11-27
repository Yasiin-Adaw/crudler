
import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';
import Icons from "../UI/Icons";
import { Button, ButtonTray } from "../UI/Button";

const defaultModule = {
  ModuleID: Math.floor(Math.random() * 900000) + 100000,
  ModuleCode: "CIS30",
  ModuleName: "Mobile Application Development",
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: "Graeme JONES",
  ModuleImage: "https://images.freeimages.com/images/small-preview/cf5/cellphone-1313194.jpg",
};


export const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations ----------------------
  const { onAdd } = route.params;

  // State ----------------------------
  // Handlers -----------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;
  // View -----------------------------
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />

        <Button label="Cancel" icon={<Icons.Add />} onClick={handleCancel} />

      </ButtonTray>

    </Screen>
  );
};

const styles = StyleSheet.create({

});
export default ModuleAddScreen;
