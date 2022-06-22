import Matter from 'matter-js';
import react from 'react';
import SpriteSheet from 'rn-sprite-sheet';
import { View } from 'react-native';

const Bird = props =>{
    const widthBody = props.body.bounds.max.x - props.body.bounds.max.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.max.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody/2

    const color = props.color

    return(
        <View style={{
            borderWidth:1,
            borderColor:color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}
        />
    )

    // return(
    //     <SpriteSheet
    //         ref={ref => (this.flamingo = ref)}
    //         source={require('../assets/sprites/FlamingoWalking2p.png')}
    //         columns={2}
    //         rows={2}
    //         // height={200} // set either, none, but not both
    //         width={200}
    //         imageStyle={{ marginTop: -1 }}
    //         animations={{
    //             walk: [0, 1, 2, 3]
    //             // appear: Array.from({ length: 15 }, (v, i) => i + 18),
    //             // die: Array.from({ length: 21 }, (v, i) => i + 33)
    //         }}
    //         />
    // )
}

export default(world, color, pos, size) => {
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {label: 'bird'}
    )
    Matter.World.add(world, initialBird);
    return{
        body: initialBird,
        color,
        pos,
        renderer: <Bird/>
    }
}