import {Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useCardAnimatedStyle} from '../functions/card-style';
import {
  ANIMATION_HEIGHT,
  ANIMATION_WIDTH,
} from '../functions/device-dimensions';
import {PlayerBasicInfoProps} from '../types/player-basic-info';

export const PlayerBasicInfo = ({
  item,
  url,
  animationValue,
  index,
}: PlayerBasicInfoProps) => {
  const cardStyle = useCardAnimatedStyle(index, animationValue);

  const player = {uri: `${url}players/${item.id}/image`};
  const club = {uri: `${url}clubs/${item.club}/image`};

  const blockStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, 60, 60],
    );

    const translateY = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, -40, -40],
    );

    const rotateZ = interpolate(animationValue.value, [-1, 0, 1], [0, 0, -25]);

    return {
      transform: [{translateX}, {translateY}, {rotateZ: `${rotateZ}deg`}],
    };
  }, [index]);

  return (
    <Animated.View style={[styles.container, cardStyle]}>
      <Animated.Image
        source={player}
        style={[styles.imagePlayer, blockStyle]}
        resizeMode={'contain'}
      />

      {club && (
        <Animated.View>
          <Animated.Image
            source={club}
            alt="image base"
            resizeMode="contain"
            style={[styles.imageClub, blockStyle]}
          />
        </Animated.View>
      )}

      {item.commonName && (
        <Text bold fontSize={42} style={[styles.shadow, styles.text]}>
          {item.commonName}
        </Text>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 99,
  },
  imagePlayer: {
    height: ANIMATION_HEIGHT * 0.8,
    width: ANIMATION_WIDTH * 0.8,
    zIndex: 999,
    position: 'absolute',
    left: -ANIMATION_WIDTH * 0.15,
    top: 8,
    alignSelf: 'center',
  },
  imageNation: {
    height: ANIMATION_HEIGHT * 0.3,
    width: ANIMATION_WIDTH * 0.3,
    zIndex: 999,
    position: 'absolute',
    top: ANIMATION_HEIGHT * 0.35,
    left: -ANIMATION_WIDTH * 0.18,
  },
  imageClub: {
    height: ANIMATION_HEIGHT * 0.6,
    width: ANIMATION_WIDTH * 0.6,
    zIndex: 998,
    position: 'absolute',
    top: -ANIMATION_HEIGHT * 0.1,
    right: ANIMATION_WIDTH * 0.1,
  },
  text: {
    zIndex: 999,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 32,
    color: 'white',
  },
  shadow: {
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
