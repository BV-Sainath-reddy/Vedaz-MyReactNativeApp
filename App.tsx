import { useEffect } from 'react';
import { PermissionsAndroid, StatusBar, Text, StyleSheet, View, Alert } from 'react-native';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import { getApp } from '@react-native-firebase/app';

function App() {
  const requestPermission = async () => {
    try {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      console.log("result**", result);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        requestToken();
      } else {
        Alert.alert("Permission Denied");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestToken = async () => {
    try {
      const app = getApp(); // 🔄 new modular way
      const messaging = getMessaging(app); // 🔄 modular messaging instance

      await messaging.registerDeviceForRemoteMessages(); // still needed
      const token = await getToken(messaging); // 🔄 modular getToken
      console.log("token**", token);
    } catch (error) {
      console.log("FCM Token error:", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);


   useEffect(() => {
    const unsubscribe = getMessaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Push Notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
