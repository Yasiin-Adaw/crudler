import { ActivityIndicator, LogBox, StyleSheet, Text } from "react-native";
import useLoad from "../API/useLoad";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons";
import { Button, ButtonTray } from "../UI/Button";

import ModuleList from "../entity/modules/ModuleList";



const ModuleListScreen = ({ navigation }) => {
  // Initialisations ----------------------
  LogBox.ignoreLogs([
    "non-serializable values were found in the navigation state"
  ]);
  const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';

  // State ----------------------------
  const [modules, setModules, isLoading, loadModules] = useLoad(modulesEndpoint);



  // Handlers -----------------------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) => setModules(

    modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : module)
  );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();

  };

  const onModify = (module) => {
    handleModify(module);
    // navigation.navigate("ModuleListScreen");

    // navigation.popToTop();

    navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd })
  // View -----------------------------
  return (
    <Screen>

      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {
        isLoading && <ActivityIndicator />
      };
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});
export default ModuleListScreen;
