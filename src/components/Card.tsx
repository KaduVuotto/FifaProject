import React from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {useCardAnimatedStyle} from '../functions/card-style';
import {
  ANIMATION_HEIGHT,
  ANIMATION_WIDTH,
} from '../functions/device-dimensions';
import {baseURL} from '../services/api';
import {CardItem} from '../types/card-item';
import {PlayerBasicInfo} from './PlayerBasicInfo';

const BACKGROUND = {
  white: require('../assets/bg-white.png'),
  black: require('../assets/bg-black.png'),
  gold: require('../assets/bg-gold.png'),
};

export const Card: React.FC<{
  index: number;
  animationValue: Animated.SharedValue<number>;
  item: CardItem;
}> = ({index, animationValue, item}) => {
  const cardStyle = useCardAnimatedStyle(index, animationValue);

  const source = () => {
    if (item.rarity < 2) {
      return BACKGROUND.black;
    }
    if (item.rarity === 12) {
      return BACKGROUND.gold;
    }
    return BACKGROUND.white;
  };

  return (
    <Animated.View style={styles.container}>
      {item && (
        <Animated.View style={[styles.card, cardStyle]}>
          <Animated.View style={styles.imageShadow}>
            <Animated.Image
              source={source()}
              style={[cardStyle, styles.image]}
            />
          </Animated.View>
          <PlayerBasicInfo
            item={item}
            url={baseURL}
            animationValue={animationValue}
            index={index}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'transparent',
    width: ANIMATION_WIDTH,
    height: ANIMATION_HEIGHT,
  },
  image: {
    width: ANIMATION_WIDTH,
    height: ANIMATION_HEIGHT,
    borderRadius: 20,
    position: 'absolute',
    zIndex: -1,
  },
  imageShadow: {
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
