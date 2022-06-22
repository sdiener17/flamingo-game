import Matter from 'matter-js';
import react from 'react';

export default function Bird(world, color, pos, size){
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height
    )
}