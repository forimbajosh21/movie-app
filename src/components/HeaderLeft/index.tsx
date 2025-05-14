import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NativeStackHeaderLeftProps } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { Colors } from '@/src/constants/Colors';

import styles from './styles';

const HeaderLeft = ({ canGoBack }: NativeStackHeaderLeftProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    if (canGoBack) {
      router.back();
    }
  };

  return (
    <Pressable style={styles.root} onPress={handleGoBack}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={24}
        color={Colors.light.text.primary}
      />
    </Pressable>
  );
};

export default HeaderLeft;
