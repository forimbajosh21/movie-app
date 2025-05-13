import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import styles from './styles';

export interface PageContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, style }) => {
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={StyleSheet.flatten([
        styles.root,
        { paddingTop: headerHeight + 10 },
        style,
      ])}
    >
      {children}
    </View>
  );
};

export default PageContainer;
