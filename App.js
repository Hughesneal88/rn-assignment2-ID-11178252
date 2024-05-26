import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.name}>Allison</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaffaa',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
  text: {
    fontSize: 24,
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
  },
});
