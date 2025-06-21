import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import Button from '../components/Button';
import { moderateScale } from '../styles/size';
import { useTheme } from '../context/ThemeContext';
import colorSchemes from '../styles/colorSchemes';


const Screen = () => {
  const { mode, theme, toggleMode, changeTheme } = useTheme();
  
  // Get current colors
  const { background } = colorSchemes[mode][theme];
  
  // Determine status bar style
  const statusBarStyle = mode === 'dark' ? 'light-content' : 'dark-content';
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <StatusBar 
        barStyle={statusBarStyle} 
        backgroundColor={background}
      />
      
      
      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* Mode Button */}
        <Button
          type="modeButton"
          onPress={toggleMode}
        >
          {mode}
        </Button>
        
        {/* Theme Button */}
        <Button
          type="themeButton"
          onPress={changeTheme}
        >
            {theme}
        </Button>
      </View>
      
      
      {/* <View style={styles.themeIndicator}>
        <Text style={[styles.themeText, { color: textColor }]}>
          {theme.toUpperCase()}
        </Text>
      </View> */}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'center',
  },
  header: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: moderateScale(50),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: moderateScale(30),
  },
  themeIndicator: {
    position: 'absolute',
    bottom: moderateScale(30),
    alignSelf: 'center',
  },
  themeText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});