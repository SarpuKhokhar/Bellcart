import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';

const FilterDrawer = ({ visible, onClose }) => {
  const [price, setPrice] = useState(50);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedRating, setSelectedRating] = useState(5);
  const [selectedDiscounts, setSelectedDiscounts] = useState(['50%', '40%', '30%', '25%']);

  const colorOptions = ['#D1A054', '#D93C3C', '#000000', '#0F6AB4', '#CBD4D8', '#F1F1F1', '#855A4C', '#E5B6B3'];
  const discountOptions = ['50%', '40%', '30%', '25%'];

  const toggleDiscount = (discount) => {
    if (selectedDiscounts.includes(discount)) {
      setSelectedDiscounts(selectedDiscounts.filter(item => item !== discount));
    } else {
      setSelectedDiscounts([...selectedDiscounts, discount]);
    }
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="right"
      style={styles.modal}
    >
      <View style={styles.drawer}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="close" size={24} onPress={onClose} />
          <Text style={styles.headerTitle}>Filter</Text>
          <Feather name="share-2" size={20} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          {/* Price */}
          <Text style={styles.sectionTitle}>Price</Text>
          <View style={styles.sliderRow}>
            <Text>$10</Text>
            <Slider
              style={{ flex: 1, marginHorizontal: 10 }}
              minimumValue={10}
              maximumValue={80}
              step={1}
              value={price}
              onValueChange={value => setPrice(value)}
              minimumTrackTintColor="#000"
              maximumTrackTintColor="#ccc"
            />
            <Text>${price}</Text>
          </View>

          {/* Color */}
          <Text style={styles.sectionTitle}>Color</Text>
          <View style={styles.colorRow}>
            {colorOptions.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorCircle,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedColorCircle,
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>

          {/* Rating */}
          <Text style={styles.sectionTitle}>Star Rating</Text>
          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map(rating => (
              <TouchableOpacity
                key={rating}
                style={[
                  styles.ratingButton,
                  selectedRating === rating && styles.selectedRating,
                ]}
                onPress={() => setSelectedRating(rating)}
              >
                <Text style={{ fontWeight: '500' }}>★ {rating}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Category */}
          <Text style={styles.sectionTitle}>Category</Text>
          <View style={styles.categoryBox}>
            <Ionicons name="shirt-outline" size={16} />
            <Text style={{ marginLeft: 8 }}>Crop Tops</Text>
          </View>

          {/* Discount */}
          <Text style={styles.sectionTitle}>Discount</Text>
          <View style={styles.discountWrap}>
            {discountOptions.map(discount => (
              <TouchableOpacity
                key={discount}
                style={[
                  styles.discountTag,
                  selectedDiscounts.includes(discount) && styles.discountSelected,
                ]}
                onPress={() => toggleDiscount(discount)}
              >
                <Text
                  style={{
                    color: selectedDiscounts.includes(discount) ? '#fff' : '#000',
                    fontWeight: '500',
                  }}
                >
                  {discount} off
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterDrawer;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    alignItems: 'flex-end', // Align to the right side
  },
  drawer: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20, // Rounded corners on the left
    width: '80%', // Adjust width as needed
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedColorCircle: {
    borderColor: '#000',
    borderWidth: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  ratingButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  selectedRating: {
    backgroundColor: '#000',
    color: '#fff',
  },
  categoryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 12,
    marginTop: 6,
  },
  discountWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  discountTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
  },
  discountSelected: {
    backgroundColor: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginBottom: 20,
  },
  resetButton: {
    flex: 1,
    marginRight: 8,
    padding: 14,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButton: {
    flex: 1,
    marginLeft: 8,
    padding: 14,
    backgroundColor: '#000',
    borderRadius: 12,
    alignItems: 'center',
  },
  resetText: {
    color: '#333',
    fontWeight: '500',
  },
  applyText: {
    color: '#fff',
    fontWeight: '500',
  },
});
