import React, {useEffect, useState} from 'react';
import {Alert, ImageBackground, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import Carousel from 'react-native-reanimated-carousel';
import {Card} from '../../components/Card';
import {Loading} from '../../components/Loading';
import {PAGE_HEIGHT, PAGE_WIDTH} from '../../functions/device-dimensions';
import {api, config} from '../../services/api';
import {CardItem} from '../../types/card-item';

const stadium = require('../../assets/football-stadium.jpeg');

export const Home = () => {
  const [cardItem, setCardItem] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAutoPlay] = React.useState(false);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  } as const;

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('players', config);
      setCardItem(response.data.items);
    } catch (error) {
      Alert.alert('Ops', 'Não foi possivel carregar os jogadores');
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ImageBackground source={stadium} resizeMode="cover" style={styles.image}>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Carousel
            {...baseOptions}
            loop
            autoPlay={isAutoPlay}
            withAnimation={{
              type: 'spring',
              config: {
                damping: 13,
              },
            }}
            autoPlayInterval={1500}
            data={cardItem}
            renderItem={({item, index, animationValue}) => (
              <Card
                animationValue={animationValue}
                key={index}
                index={index}
                item={item}
              />
            )}
          />
        </Box>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
