import { TypographyVariant } from '@/src/types/Typography';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
  StyleSheet,
} from 'react-native';

import styles from './styles';

export interface TextProps extends ReactNativeTextProps {
  variant?: TypographyVariant;
  color?: 'primary' | 'secondary';
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  style,
  ...props
}) => {
  return (
    <ReactNativeText
      {...props}
      style={StyleSheet.flatten([
        variant ? styles[variant] : {},
        color ? styles[color] : {},
        style,
      ])}
    >
      {children}
    </ReactNativeText>
  );
};

export default Text;
