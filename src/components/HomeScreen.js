import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const images = [
  { image: require('../assets/Images/image1.png') },
  { image: require('../assets/Images/image2.png') },
  { image: require('../assets/Images/image3.png') },
  { image: require('../assets/Images/image4.png') },
  { image: require('../assets/Images/image5.png') },
  { image: require('../assets/Images/image6.png') },
  { image: require('../assets/Images/image7.png') },
  { image: require('../assets/Images/image8.png') },
  { image: require('../assets/Images/image9.png') },
  { image: require('../assets/Images/image10.png') },
  { image: require('../assets/Images/image11.png') },
  { image: require('../assets/Images/image12.png') },
  { image: require('../assets/Images/image13.png') },
  { image: require('../assets/Images/image14.png') },
  { image: require('../assets/Images/image15.png') },
  { image: require('../assets/Images/image16.png') },
  { image: require('../assets/Images/image17.png') },
  { image: require('../assets/Images/image18.png') },
  { image: require('../assets/Images/image19.png') },
  { image: require('../assets/Images/image20.png') },
  { image: require('../assets/Images/image21.png') },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % 2;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Header */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="menu" size={30} />
          </TouchableOpacity>
          <Text style={styles.logo}>GemStore</Text>
          <View>
            <Icon name="notifications-outline" size={24} />
            <View style={styles.notificationDot} />
          </View>
        </View>

        {/* Gender Category Icons */}
        <View style={styles.genderCategories}>
          <TouchableOpacity style={styles.genderItemActive}>
            <Icon name="female-outline" size={20} color="#fff" />
            <Text style={styles.genderTextActive}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderItem}>
            <Icon name="male-outline" size={20} color="#999" />
            <Text style={styles.genderText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderItem}>
            <Icon name="glasses-outline" size={20} color="#999" />
            <Text style={styles.genderText}>Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderItem}>
            <Icon name="color-palette-outline" size={20} color="#999" />
            <Text style={styles.genderText}>Beauty</Text>
          </TouchableOpacity>
        </View>

        {/* Banner Slider */}
        <View style={{ top: 30 }}>
          <FlatList
            ref={flatListRef}
            data={images.slice(0, 2)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <RenderSliderList item={item} />}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            onScrollToIndexFailed={() => {}}
          />
          <Text style={styles.title}>Autumn</Text>
          <Text style={styles.title}>Collection</Text>
          <Text style={styles.title}>2021</Text>
        </View>

        {/* Feature Products */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Feature Products</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={{ bottom: 55 }}>
          <FlatList
            horizontal
            data={images.slice(2, 21)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>Long Dress</Text>
                <Text style={styles.productPrice}>$49.00</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Recommended Banner */}
        <TouchableOpacity style={styles.recommended}>
          <Image source={require('../assets/Images/image12.png')} style={styles.recommendImage} />
        </TouchableOpacity>

        {/* Recommended Products */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={{ bottom: 35 }}>
          <FlatList
            horizontal
            data={images.slice(2, 11)}
            keyExtractor={(_, index) => `rec-${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.recommendCard}>
                <Image source={item.image} style={styles.recommendProductImage} />
                <Text style={styles.productName}>White Tee</Text>
                <Text style={styles.productPrice}>$29.00</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Top Collection */}
        <View style={styles.sectionHeader1}>
          <Text style={styles.sectionTitle}>Top Collection</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={{ top: 35 }}>
          <FlatList
            horizontal
            data={images.slice(2, 11)}
            keyExtractor={(_, index) => `top-${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.topCard}>
                <Image source={item.image} style={styles.topImage} />
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

const RenderSliderList = ({ item }) => (
  <View style={styles.slide}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.overlay}>
      <Text style={styles.Slider_text}>{item.title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 24,
    bottom: 30,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDot: {
    position: 'absolute',
    right: -1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'pink',
    bottom: 22,
  },
  genderCategories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genderItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    width: 40,
    height: 40,
  },
  genderItemActive: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#2c1e1e',
    width: 40,
    height: 40,
  },
  genderText: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  },
  genderTextActive: {
    fontSize: 12,
    color: '#fff',
    top: 20,
  },
  slide: {
    width: width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.9,
    height: 180,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  Slider_text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF',
    bottom: 180,
    alignSelf: 'flex-end',
    right: 35,
    padding: 4,
    fontFamily: 'Product Sans Bold Italic',
  },
  sectionHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
    top: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
    bottom: 55,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 13,
    color: '#888',
  },
  productCard: {
    width: 120,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 12,
    color: 'gray',
  },
  recommended: {
    padding: 16,
    bottom: 60,
  },
  recommendImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  recommendCard: {
    width: 140,
    margin: 10,
    alignItems: 'center',
  },
  recommendProductImage: {
    width: 120,
    height: 140,
    borderRadius: 10,
  },
  topCard: {
    width: 160,
    height: 200,
    margin: 10,
  },
  topImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default HomeScreen;
