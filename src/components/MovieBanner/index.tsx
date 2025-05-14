import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ReAnimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import YoutubePlayer from 'react-native-youtube-iframe';

import StarRating, { StarRatingProps } from '@/src/components/StarRating';

import { BANNER_HEIGHT } from '@/src/constants';
import styles from './styles';

export interface MovieBannerProps extends StarRatingProps {
  backdropPath: string;
  videoSource: string;
}

const MovieBanner: React.FC<MovieBannerProps> = ({
  backdropPath,
  videoSource,
  rating,
}) => {
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(playing ? 0.1 : 1, {
        duration: 350,
      }),
      zIndex: 0,
    };
  });

  const playerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(playing ? 1 : 0, {
        duration: 350,
      }),
    };
  });

  const handleOnChangeState = useCallback((state: any) => {
    switch (state) {
      case 'paused':
      case 'ended':
        setPlaying(false);
        break;
      default:
        break;
    }
  }, []);

  return (
    <View style={styles.root}>
      <ReAnimated.View style={animatedStyle}>
        <Image
          source={`${process.env.EXPO_PUBLIC_ASSET_URL + backdropPath}`}
          contentFit="cover"
          transition={350}
          style={styles.banner}
        />

        <StarRating
          rating={Number(rating?.toFixed(1))}
          style={styles.starRating}
        />
        {videoSource && (
          <View
            style={{
              position: 'absolute',
              top: 44,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <TouchableOpacity onPress={handlePlay} activeOpacity={0.7}>
              <AntDesign name="play" size={48} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </ReAnimated.View>
      <ReAnimated.View style={[styles.player, playerAnimatedStyle]}>
        <View style={styles.playerContent}>
          <YoutubePlayer
            width="100%"
            height={BANNER_HEIGHT}
            play={playing}
            videoId={videoSource}
            onChangeState={handleOnChangeState}
          />
        </View>
      </ReAnimated.View>
    </View>
  );
};
export default MovieBanner;
