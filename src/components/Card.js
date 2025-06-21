import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { scale, moderateScale, verticalScale } from '../styles/size';
import { useTheme } from '../context/ThemeContext';
import colorSchemes from '../styles/colorSchemes';

export default function Card({ title, summary }) {
  const { mode, theme } = useTheme();
  const colors = colorSchemes[mode][theme];
  const [open, setOpen] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    Animated.spring(anim, {
      toValue: open ? 0 : 1,
      useNativeDriver: false,
      friction: 8,
      tension: 80,
    }).start();
    setOpen(o => !o);
  };

  const height = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [scale(200), scale(400)],
  });

  const items = [
    { name: 'Someone', text: 'Lorem ipsum' },
    { name: 'Someone else', text: 'Lorem ipsum', hasSquare: true },
    {
      name: 'Who else',
      text: 'Lorem Indeed!',
      mention: '@Someone else',
      hasdiamond: true,
    },
    { name: 'No one', text: 'Cool!', hasdiamond: true, hasSquare: true },
  ];

  return (

    <Animated.View style={[styles.card, { height, backgroundColor: colors.background, borderColor: colors.themeButton.default.bg }]}>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <View
          style={[
            styles.sectionHeader,
            {
              borderBottomColor: colors.themeButton.default.bg,
              borderBottomWidth: open ? moderateScale(0.5) : 0,
            },
          ]}
        >
          <View style={[styles.swatch, { backgroundColor: colors.themeButton.default.bg }]} />
          <View style={styles.textBlock}>
            <Text style={[styles.title, { color:  mode === 'Dark' ? '#fff' : '#000' }]}>{title}</Text>
             <Text
              style={[styles.summary, { color:  mode === 'Dark' ? '#fff' : '#000' }]}
              numberOfLines={open ? undefined : 4}
              ellipsizeMode="tail"
            >
              {summary}
            </Text>

            <View style={styles.iconRow}>
              <View style={styles.shapeWrapper}>
                <View style={[styles.square, { backgroundColor: colors.themeButton.default.bg, transform: [{ rotate: '45deg' }] }]} />
              </View>
              <View style={styles.shapeWrapper}>
                <View style={[styles.square, { backgroundColor: colors.themeButton.default.bg }]} />
              </View>
            </View>
          </View>
        </View>


        {open &&
          items.map((it, i) => (
            <View key={i}>
              <View style={styles.itemRow}>
                <View
                  style={[
                    styles.swatch,
                    { backgroundColor: colors.themeButton.default.bg },
                  ]}
                />
                <View style={styles.itemText}>
                  <Text
                    style={[
                      styles.itemName,
                      { color:  mode === 'Dark' ? '#fff' : '#000' },
                    ]}
                  >
                    {it.name}
                  </Text>
                  {/* <Text style={{ color:  mode === 'Dark' ? '#fff' : '#000', fontSize: moderateScale(14), fontWeight: '400' }}>
                    {it.mention ? `${it.mention} ${it.text}` : it.text}
                  </Text> */}
                  <Text style={{ color: mode === 'Dark' ? '#fff' : '#000', fontSize: moderateScale(14) }}>
                    {it.mention ? (
                      <>
                        <Text
                          style={{
                            color: '#007AFF',             // iOS-style link blue; pick your own
                            fontWeight: '700',
                            textDecorationLine: 'underline',
                          }}
                        >
                          {it.mention}
                        </Text>
                        <Text> </Text>{/* space between mention & text */}
                        <Text style={{ fontWeight: '400' }}>
                          {it.text}
                        </Text>
                      </>
                    ) : (
                      it.text
                    )}
                  </Text>

                  {/* combined shapes container */}
                  {(it.hasSquare || it.hasdiamond) && (
                    <View style={styles.shapesRow}>
                      {it.hasSquare && (
                        <View style={[styles.shapeWrapper, { marginRight: moderateScale(8) }]}>
                          <View
                            style={[
                              styles.square,
                              { backgroundColor: colors.themeButton.default.bg },
                            ]}
                          />
                        </View>
                      )}
                      {it.hasdiamond && (
                        <View style={styles.shapeWrapper}>
                          <View
                            style={[
                              styles.square,
                              {
                                backgroundColor: colors.themeButton.default.bg,
                                transform: [{ rotate: '45deg' }],
                              },
                            ]}
                          />
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
              {i < items.length - 1 && (
                <View
                  style={[
                    styles.separator,
                    { borderBottomColor: colors.themeButton.default.bg },
                  ]}
                />
              )}
            </View>
          ))
        }

      </ScrollView>

      {/* Fixed footer: Open/Close */}
      <Pressable onPress={toggle} style={styles.toggleBtn}>
        <Text style={[styles.toggleText, { color:  mode === 'Dark' ? '#fff' : '#000' }]}>
          {open ? 'Close' : 'Open'}
        </Text>
      </Pressable>
    </Animated.View>

  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    minWidth: scale(300),
    borderRadius: scale(12),
    padding: moderateScale(12),
    overflow: 'hidden',
    marginVertical: moderateScale(8),
  },

  sectionHeader: {
    flexDirection: 'row',
    paddingBottom: moderateScale(8),
  },
  textBlock: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  swatch: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(8),
    marginRight: moderateScale(8),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  summary: {
    // marginTop: moderateScale(6),
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: moderateScale(8),
    gap: moderateScale(8),
  },
  shapesRow: {
    flexDirection: 'row',
    marginTop: moderateScale(8),
  },
  shapeWrapper: {
    flexDirection: 'row',
    width: scale(24),
    height: scale(24),
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',

  },

  square: {
    width: scale(12),
    height: scale(12),
  },
  listContainer: {
    flex: 1,
    maxHeight: scale(200), // Adjust height as needed
    marginTop: moderateScale(10),
  },
  itemRow: {
    flexDirection: 'row',
    paddingVertical: moderateScale(8),
  },
  itemText: {
    flex: 1,
  },
  itemName: {
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  separator: {
    borderBottomWidth: moderateScale(0.5),
    marginVertical: moderateScale(4),
  },
  toggleBtn: {
    alignSelf: 'stretch',
    minwidth: '100%',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
