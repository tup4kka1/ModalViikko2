import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import {Alert, Modal} from "react-native";


export default function App() {

  const [showModal, toggleModal] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Modal visible={showModal} onRequestClose={() => toggleModal(!showModal)}>
        <View>
            <View style={{alignItems: 'center', marginTop:200, backgroundColor:"lightgrey", padding: 20}}>
              <Text style={{textAlign: 'center'}} >This is the modal ahahahahh</Text>
              <Pressable onPress={() => toggleModal(!showModal)}>
                <Text style={{padding: 5, fontWeight: 'bold', fontSize: 20, marginTop:50}}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <Pressable onPress = {() => toggleModal(!showModal)}>
      <Text>Press to show modal</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
// </Pressable>Text>Modal visible : {showModal ? "true" : "false"}</Text>
function showmodal() {
  return 1
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
