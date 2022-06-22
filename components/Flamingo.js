import SpriteSheet from 'rn-sprite-sheet'
import { View, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'



export default function Flamingo(){
    //const [flamingo, setFlamingo] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const flamingo = null;

    // run = () =>{
    //     setIsRunning(true);
    //     flamingo.play({
    //         type:"walk",
    //         fps: 7,
    //         onFinish: ()=>{

    //         }
    //     })
    // }

    function runNow(){
        //setIsRunning(true);
        console.log("We are running");
        flamingo.play({
            type:"walk",
            fps: 7,
            onFinish: ()=>{
                setIsRunning(false)
            }
        })
    }

    return(
        <View>
            <SpriteSheet
                ref={ref => (flamingo)}
                source={require('../assets/sprites/FlamingoWalking2p.png')}
                columns={2}
                rows={2}
                // height={200} // set either, none, but not both
                //width={200}
                imageStyle={{ marginTop: -1 }}
                animations={{
                    walk: [0, 1, 2, 3]
                    // appear: Array.from({ length: 15 }, (v, i) => i + 18),
                    // die: Array.from({ length: 21 }, (v, i) => i + 33)
                }}
            />
            <TouchableWithoutFeedback onPress={runNow} style={{postion: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
                <View pointerEvents='none' style={{postion: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}/>
                {/* <View/> */}
            </TouchableWithoutFeedback>
        </View>

    )

}