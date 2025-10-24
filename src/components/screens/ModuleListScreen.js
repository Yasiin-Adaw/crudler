
import {Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';

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
        return (
          <Pressable key={module.ModuleCode} onPress={handleSelect}>
          <View >
            <Text>
              {module.ModuleCode} {module.ModuleName} 

            </Text>
          </View>
          </Pressable>
        )


      })}
     </ScrollView> 
    </Screen>
  
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    ontSize: 16,
  },
  
});
export default ModuleListScreen;
