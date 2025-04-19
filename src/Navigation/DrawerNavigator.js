import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/Images/girl3.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Sunie Pham</Text>
          <Text style={styles.profileEmail}>unison@yand.com</Text>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menuSection}>
        <DrawerItem icon="home-outline" label="Homepage" />
        <DrawerItem icon="compass-outline" label="Discover" />
        <DrawerItem icon="cart-outline" label="My Order" />
        <DrawerItem icon="person-outline" label="My Profile" />
      </View>

      {/* Divider */}
      <Text style={styles.dividerText}>OTHER</Text>

      {/* Other Section */}
      <View style={styles.menuSection}>
        <DrawerItem icon="settings-outline" label="Setting" />
        <DrawerItem icon="help-circle-outline" label="Support" />
        <DrawerItem icon="information-circle-outline" label="About Us" />
      </View>

      {/* Theme Section */}
      <View style={styles.themeSwitch}>
        <TouchableOpacity style={styles.themeBtn}>
          <Ionicons name="sunny-outline" size={20} color="#555" />
          <Text style={styles.themeText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.themeBtn}>
          <Ionicons name="moon-outline" size={20} color="#555" />
          <Text style={styles.themeText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const DrawerItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={22} color="#333" />
    <Text style={styles.menuText}>{label}</Text>
  </TouchableOpacity>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  menuSection: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  dividerText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    color: '#999',
    fontWeight: 'bold',
  },
  themeSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  themeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  themeText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default DrawerNavigator;
