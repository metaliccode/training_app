import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

// functional components
// cara 1
// function Nama() {
//   return <Text>Ihsan Miftahul Huda</Text>;
// }

// cara 2 => arrow function () => {}
const App = () => {
  return (
    <View>
      <Text>Ihsan</Text>
      <NamaPanjang />
      <Photo />
      <BoxGreen />
      <Gambar />
    </View>
  );
};

const NamaPanjang = () => {
  return <Text>Miftahul</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

// Class Components
class BoxGreen extends Component {
  // hrs ada render
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Gambar extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/animals'}}
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
        />
        <Text style={{color: '#6C5ECF'}}>Ini Hewan </Text>
      </View>
    );
  }
}

export default App;
