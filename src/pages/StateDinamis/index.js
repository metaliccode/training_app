import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View>
      <Text style={styles.text}>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

// class component
class CounterClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.number}</Text>
        <Button
          title="Tambah Class"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View>
      <Text style={styles.text}>Materi State Dinamis</Text>
      <Counter />
      <Counter />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  text: {
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
