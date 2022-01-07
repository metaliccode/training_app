import React, {Component, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// class componet
// class FlexBox extends Component {
//   // lifecycle Component
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');

//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> component Did Mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 500,
//       });
//     }, 2000);
//   }
//   componentDidUpdate() {
//     console.log('==> component did update');
//   }
//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       <View>
//         <Text>Materi LifeCycle Component</Text>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={require('../../assets/images/mac.jpg')}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               marginRight: 15,
//             }}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Ihsan Miftahul Huda
//             </Text>
//             <Text>{this.state.subscriber}rb Subcriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// react hook  dengan functional components
const FlexBox = () => {
  const [subcriber, setSubcriber] = useState(200);
  useEffect(() => {
    // ini untuk did mount
    console.log('did mount');
    setTimeout(() => {
      setSubcriber(400);
    }, 2000);
    return () => {
      // did update & willunmount
      console.log('did update');
    };
  }, [subcriber]);
  return (
    <View>
      <Text>Materi LifeCycle Component</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={require('../../assets/images/mac.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 15,
          }}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Ihsan Miftahul Huda
          </Text>
          <Text>{subcriber}rb Subcriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});
