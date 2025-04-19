import React, {useRef, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Discover something new',
    subtitle: 'Special new arrivals just for you',
    image: require('../assets/Images/girl4.png'),
  },
  {
    key: '2',
    title: 'Update trendy outfit',
    subtitle: 'Favorite brands and hottest trends',
    image: require('../assets/Images/girl3.png'),
  },
  {
    key: '3',
    title: 'Explore your true style',
    subtitle: 'Relax and let us bring the style to you',
    image: require('../assets/Images/girl5.png'),
  },
];

const IntroSlider = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      ref.current?.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Bottom background with opacity */}
      <View style={styles.bottomBackground} />

      <FlatList
        ref={ref}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View style={styles.slide}>
            {/* Image with background */}
            <View style={styles.imageContainer}>
              <View style={styles.imageBackground} />
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            {/* Text */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        )}
      />

      {/* Dots + Button */}
      <View style={styles.bottomContent}>
        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Shopping now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 1,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    bottom: height * 0.3,
    alignSelf: 'center',
    zIndex: 3,
    width: width * 0.9,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  imageBackground: {
    position: 'absolute',
    backgroundColor: '#B9B9B9',
    borderRadius: 20,
    width: '93%',
    height: '120%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.1 - 20, // moved 20px higher
    width: '100%',
    alignItems: 'center',
    zIndex: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    height: height * 0.34,
    width: '100%',
    backgroundColor: '#464447',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    opacity: 0.6,
    zIndex: 1,
  },
  bottomContent: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    zIndex: 5,
  },
  dots: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    opacity: 0.2,
    marginHorizontal: 5,
    bottom: 35,
  },
  activeDot: {
    opacity: 1,
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 28,
    backgroundColor: '#FFFFFF',
    bottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
});
