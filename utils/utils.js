import { Dimensions, Platform } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const TOP_AREA_HEIGHT = 120;
export const GRID_AREA_WIDTH = SCREEN_WIDTH;
export const GRID_AREA_HEIGHT = SCREEN_HEIGHT - TOP_AREA_HEIGHT;
export const ANIMAL_SIZE = 57;

export const FONT_FAMILY = 'pequena';

export const KILL_SCORE = 1;
export const MISS_SCORE = 1;
export const ESCAPE_SCORE = 1;
export const MAX_MISSES = 5;

export const IMAGES = {
    'flamingo': require('../assets/sprites/flamingoWalking1p.png'),

};
