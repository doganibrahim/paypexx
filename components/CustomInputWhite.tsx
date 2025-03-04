import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface CustomInputWhiteProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  width?: number | string;
  rightIcon?: ImageSourcePropType;
}

const CustomInputWhite: React.FC<CustomInputWhiteProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  width = '100%',
  rightIcon,
  ...props
}) => {
  return (
    <View style={[{ width: width as number }, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            inputStyle,
            rightIcon && { paddingRight: 44 },
          ]}
          placeholderTextColor="#999"
          {...props}
        />
        {rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.icon, styles.rightIcon]}
          />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 16,
  },
  error: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
  rightIcon: {
    // marginRight kaldırıldı çünkü zaten right: 16 var
  },
});

export default CustomInputWhite;
