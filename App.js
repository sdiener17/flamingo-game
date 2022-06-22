import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {GameEngine} from "react-native-game-engine";

export default function App() {
  return (
    <View style={styles.container}>
      <GameEngine style={styles.engine}>

      </GameEngine>
      <Text>Hello world!</Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  engine:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
