import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="#7c3aed" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="search" size={24} color="#7c3aed" />
      </TouchableOpacity>
      <View style={styles.centerIcon}>
        <TouchableOpacity>
          <Ionicons name="analytics" size={32} color="#7c3aed" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="time" size={24} color="#7c3aed" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="person" size={24} color="#7c3aed" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    paddingVertical: 12,
  },
  iconContainer: {
    padding: 8,
  },
  centerIcon: {
    backgroundColor: '#7c3aed',
    borderRadius: 50,
    padding: 12,
  },
});

export default NavigationBar;