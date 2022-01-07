import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ClassFungsi from './dasar/ClassFungsi';
import Home from './dasar/Home';
import PotitionReactNative from './dasar/PotitionReactNative';
import StylingRnComp from './dasar/StylingRnComp';
import CallApiAxios from './pages/CallApiAxios';
import CallApiVanilla from './pages/CallAPIVanilla';
import Comunication from './pages/Comunication';
import CrudApi from './pages/CrudApi';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';

const App = () => {
  // react Hook
  const [isShow, SetIsShow] = useState(true);
  // use Effect untuk fungsi component
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* {/* <Home /> */}
        {/* <ClassFungsi /> */}
        {/* <StylingRnComp /> */}
        {/* <PotitionReactNative /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Comunication />     */}
        {/* <CallApiVanilla /> */}
        {/* <CallApiAxios /> */}
        <CrudApi />
      </ScrollView>
    </View>
  );
};

export default App;
