import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';

import Text from '@/src/components/Text';

import styles from './styles';

export interface MovieOverviewProps {
  overview: string;
  style?: StyleProp<ViewStyle>;
}

const MovieOverview: React.FC<MovieOverviewProps> = ({ overview, style }) => {
  return (
    <View style={style}>
      <View style={styles.titleContainer}>
        <Text variant="heading-large" style={styles.title}>
          About Movie
        </Text>
        <View style={styles.indicator} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text variant="body" style={styles.overview}>
          {overview}
        </Text>
        <View style={{ height: 350 }} />
      </ScrollView>
    </View>
  );
};

export default MovieOverview;
