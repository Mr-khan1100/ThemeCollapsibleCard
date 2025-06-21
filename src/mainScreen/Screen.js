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
import Card from '../components/Card';


const Screen = () => {
  const { mode, theme, toggleMode, changeTheme } = useTheme();
  const { background } = colorSchemes[mode][theme];
  const statusBarStyle = mode === 'dark' ? 'light-content' : 'dark-content';
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <StatusBar 
        barStyle={statusBarStyle} 
        backgroundColor={background}
      />
      
      <View style={styles.buttonContainer}>
        <Button
          type="modeButton"
          onPress={toggleMode}
        >
            {mode}
        </Button>
        
        <Button
          type="themeButton"
          onPress={changeTheme}
        >
            {theme}
        </Button>
      </View>
    <View style={styles.cardContainer}>
        <Card
            title="Cool guy"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna orci, blandit eu ante nec, sodales vehicula nisi. Mauris vel nibh imperdiet, tempus lectus ac, faucibus quam. Praesent euismod congue cursus. Phasellus tincidunt sem vitae neque egestas, ut egestas justo venenatis."
            >
        </Card>
    </View>

    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(50),
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
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  }
});