import Animated from 'react-native-reanimated';
import {CardItem} from './card-item';

export interface PlayerBasicInfoProps {
  item: CardItem;
  url: string;
  animationValue: Animated.SharedValue<number>;
  index: number;
}
