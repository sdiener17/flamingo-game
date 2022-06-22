import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {GameEngine} from "react-native-game-engine";
import SpriteSheet from 'rn-sprite-sheet';
import Flamingo from './components/Flamingo';
import entities from './entities';


//play = config => this.FlamingoWalking2p.play(config);

export default function App() {
  const flamingos = [];
  const flamingo = null;
  return (
    <View style={styles.container}>
      <GameEngine style={styles.engine} entities={entities()}>

      </GameEngine>
      <Text>Hello world!</Text>
      {/* <View style={styles.playArea}>
        {Array.apply(null, Array(4)).map((el, rowIdx)=>{
          return(
            <View style={styles.playRow} key={rowIdx}>
              {Array.apply(null, Array(3)).map((cl, colIdx)=>{
                let flamingoIdx = (rowIdx+3)+colIdx;
                <View style={styles.playCell} key={flamingoIdx}>
                  <Flamingo
                    index={flamingoIdx}
                    ref={(ref)=>{flamingos[flamingoIdx] = ref}}
                  />
                </View>
              })}
            </View>
          )
        })}
      </View> */}
      <View style={styles.playArea}>
         <Flamingo/>
          {/* // index={0}
          // ref={(ref)=>(flamingo=ref)}
        // /> */}
      </View>
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
  },
  playArea:{
    position: 'absolute'
  }
});
