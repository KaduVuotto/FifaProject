import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {withAnchorPoint} from './archor-point';
import {ANIMATION_HEIGHT, ANIMATION_WIDTH} from './device-dimensions';

export function useCardAnimatedStyle(
  index: number,
  animationValue: Animated.SharedValue<number>,
) {
  const cardStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-0.1, 0, 1],
      [0.95, 1, 1],
      Extrapolate.CLAMP,
    );

    const translateX = interpolate(
      animationValue.value,
      [-1, -0.2, 0, 1],
      [0, ANIMATION_WIDTH * 0.3, 0, 0],
    );

    const transform = {
      transform: [
        {scale},
        {translateX},
        {perspective: 200},
        {
          rotateY: `${interpolate(
            animationValue.value,
            [-1, 0, 0.4, 1],
            [30, 0, -25, -25],
            Extrapolate.CLAMP,
          )}deg`,
        },
      ],
    };

    return {
      ...withAnchorPoint(
        transform,
        {x: 0.5, y: 0.5},
        {width: ANIMATION_WIDTH, height: ANIMATION_HEIGHT},
      ),
    };
  }, [index]);

  return cardStyle;
}
