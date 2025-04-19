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

const images = [
  require('../assets/Images/Frame1.png'),
  require('../assets/Images/Frame2.png'),
  require('../assets/Images/Frame3.png'),
  require('../assets/Images/Frame4.png'),
];

const clothingData = [
  { category: 'Jacket', items: 'Tiltform >' },
  { category: 'Skirts', items: 'Adjusts >' },
  { category: 'Dresses', items: 'Sisters >' },
  { category: 'Records', items: 'Sisters >' },
  { category: 'Aons', items: 'Sisters >' },
  { category: 'T-Shirts', items: 'Titters >' }, // Corrected to T-Shirts
  { category: 'Pants', items: 'Titters >' },   // Corrected to Pants
];

const SearchScreen = () => {
  const [showClothingData, setShowClothingData] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.title}>Discover</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#888" style={{ marginRight: 8 }} />
          <TextInput placeholder="Search" style={{ flex: 1 }} />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <Feather name="sliders" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Image List */}
      <ScrollView contentContainerStyle={styles.imageList}>
        {images.map((img, index) => (
          <TouchableOpacity 
            key={index} 
            activeOpacity={0.8}
            onPress={index === 0 ? () => setShowClothingData(true) : null}
          >
            <Image source={img} style={styles.imageCard} resizeMode="cover" />
            {showClothingData && (
          <View style={styles.clothingContainer}>
            <Text style={styles.clothingHeader}>CLOTHING</Text>
            {clothingData.map((item, index) => (
              <View key={index} style={styles.clothingItem}>
                <Text style={styles.categoryText}>{item.category}</Text>
                <Text style={styles.itemsText}>{item.items}</Text>
              </View>
            ))}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setShowClothingData(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
          </TouchableOpacity>
        ))}

        {/* Clothing Data Display */}
       
      </ScrollView>
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
    marginTop: 20,
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