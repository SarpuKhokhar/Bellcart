import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const notifications = [
  {
    id: '1',
    title: 'Good morning! Get 20% Voucher',
    description: 'Summer sale up to 20% off. Limited voucher.\nGet now!! 😍',
  },
  {
    id: '2',
    title: 'Special offer just for you',
    description: 'New Autumn Collection 30% off',
  },
  {
    id: '3',
    title: 'Holiday sale 50%',
    description: 'Tap here to get 50% voucher.',
  },
];

const Notification = () => {
     const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
  <Ionicons name="chevron-back" size={24} color="black" />
</TouchableOpacity>

        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} /> {/* placeholder to balance back icon */}
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});
