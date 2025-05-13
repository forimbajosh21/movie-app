import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MoviesNowPlayingList from '@/src/components/MoviesNowPlayingList';
import PageContainer from '@/src/components/PageContainer';
import SearchBar from '@/src/components/Searchbar';
import MoviesPopularList from '../components/MoviesPopularList';
import MoviesTopRatedList from '../components/MoviesTopRatedList';
import MoviesUpcomingList from '../components/MoviesUpcomingList';

const data = [
  { id: 0, component: MoviesNowPlayingList },
  { id: 1, component: MoviesUpcomingList },
  { id: 2, component: MoviesTopRatedList },
  { id: 3, component: MoviesPopularList },
];

export default function Index() {
  const { bottom } = useSafeAreaInsets();
  return (
    <PageContainer>
      <View style={styles.segment}>
        <SearchBar editable={false} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <item.component key={item.id} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 16,
            }}
          />
        )}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  segment: {
    marginBottom: 16,
  },
});
