import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FilterDrawer from '../Navigation/FilterDrawer';
import { DrawerActions, useNavigation } from '@react-navigation/native'; // Fix for navigation

const images = [
  { src: require('../assets/Images/Frame1.png'), category: 'Clothing' },
  { src: require('../assets/Images/Frame2.png'), category: 'Accessories' },
  { src: require('../assets/Images/Frame3.png'), category: 'Shoes' },
  { src: require('../assets/Images/Frame4.png'), category: 'Collection' },
];

const categoryData = {
  Clothing: [
    { category: 'Jacket', items: 'Tiltform >' },
    { category: 'Skirts', items: 'Adjusts >' },
    { category: 'Dresses', items: 'Sisters >' },
    { category: 'T-Shirts', items: 'Titters >' },
    { category: 'Pants', items: 'Titters >' },
  ],
  Accessories: [
    { category: 'Bags', items: 'Carrymore >' },
    { category: 'Hats', items: 'Crown Up >' },
    { category: 'Belts', items: 'Wraps >' },
  ],
  Shoes: [
    { category: 'Sneakers', items: 'Runwell >' },
    { category: 'Boots', items: 'TrekPro >' },
    { category: 'Heels', items: 'StepUp >' },
  ],
  Collection: [
    { category: 'Spring', items: 'Blossom >' },
    { category: 'Summer', items: 'Shine >' },
    { category: 'Autumn', items: 'Falling >' },
    { category: 'Winter', items: 'Snowy >' },
  ],
};

const SearchScreen = ({ isVisible, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const navigation = useNavigation(); // Fix for navigation

  // if (!isVisible) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Discover</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#888" style={{ marginRight: 8 }} />
          <TextInput placeholder="Search" style={{ flex: 1 }} />
        </View>
        <TouchableOpacity
          style={styles.filterIcon}
          onPress={() => setShowFilter(true)}
        >
          <Feather name="sliders" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.imageList}>
        {images.map((img, index) => (
          <View key={index}>
            {/* Category Image */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setActiveCategory(
                  activeCategory === img.category ? null : img.category
                )
              }
            >
              <Image source={img.src} style={styles.imageCard} resizeMode="cover" />
            </TouchableOpacity>

            {/* Show Data below selected image */}
            {activeCategory === img.category && (
              <View style={styles.clothingContainer}>
                <Text style={styles.clothingHeader}>{img.category}</Text>
                {categoryData[img.category].map((item, subIndex) => (
                  <View key={subIndex} style={styles.clothingItem}>
                    <Text style={styles.categoryText}>{item.category}</Text>
                    <Text style={styles.itemsText}>{item.items}</Text>
                  </View>
                ))}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setActiveCategory(null)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Filter Drawer */}
      <FilterDrawer visible={showFilter} onClose={() => setShowFilter(false)} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  filterIcon: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 12,
    marginLeft: 10,
  },
  imageList: {
    paddingBottom: 20,
  },
  imageCard: {
    height: 120,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    alignSelf: 'center',
  },
  clothingContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  clothingHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  clothingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemsText: {
    fontSize: 14,
    color: '#888',
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
});
