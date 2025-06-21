// src/components/Button.js
import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { moderateScale } from '../styles/size';
import { useTheme } from '../context/ThemeContext';
import colorSchemes from '../styles/colorSchemes';

export default function Button({ type, onPress, children }) {
  const { mode, theme } = useTheme();
  const [buttonState, setButtonState] = useState('default');

  const colors = colorSchemes[mode][theme][type][buttonState];

  const handlePressIn = () => setButtonState('hover');
  const handlePressOut = () => setButtonState('clicked');
  const handlePress = () => {
    setButtonState('hover');
    onPress?.();
    setTimeout(() => setButtonState('default'), 200);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.bg,
        // padding: moderateScale(15),
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(16),
        borderRadius: moderateScale(8),
        minWidth: moderateScale(150),
        alignItems: 'center',
      }}
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <Text style={{ color: colors.text, fontWeight:buttonState === 'clicked' ?  '700' : '400', fontSize: moderateScale(12) }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
