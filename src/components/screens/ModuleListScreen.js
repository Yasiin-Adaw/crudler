
import { ScrollView, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleItem from '../entity/modules/ModuleItem';

import initialModules from '../../data/modules.js';

export const ModuleListScreen = () => {
  // Initialisations ----------------------
  const modules = initialModules;
  // State ----------------------------
  // Handlers -----------------------
  const handleSelect = () => alert('item selected');
  // View -----------------------------
  return (
    <Screen>
     
        <ScrollView style={styles.container}>
        {modules.map((module) => {
        

        return <ModuleItem key={module.ModuleCode} module={module} onSelect={handleSelect} />;


      })}
     </ScrollView> 
    </Screen>
  
  );
};

const styles = StyleSheet.create({
  container: {},
  
  
});
export default ModuleListScreen;
