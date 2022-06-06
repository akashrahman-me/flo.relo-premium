import React, {useState} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import tw from 'twrnc';

const Home = () => {
  const [application, setApplication] = useState(false);
  const toggleApplicaton = () => setApplication(v => !v);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(v => !v);

  return (
    <View>
      <View style={{...tw`relative right-0`, elevation: 1}}>
        <View
          style={tw`py-2 px-3 flex-row justify-between items-center bg-gray-800 relative z-50`}>
          <View style={tw`flex-row items-center`}>
            <Image
              style={{width: 22, height: 20}}
              source={require('../../images/header_logo.png')}
            />
            <Text style={tw`text-white font-medium ml-2`}>Flo.relo</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <View style={tw`mr-4`}>
              <TouchableHighlight
                style={tw`${
                  application ? 'bg-blue-700' : 'bg-gray-600'
                } px-1.5 py-0.25 w-9`}
                onPress={toggleApplicaton}>
                <Text style={tw`text-white text-xs text-center`}>
                  {application ? 'ON' : 'OFF'}
                </Text>
              </TouchableHighlight>
            </View>
            <View style={tw`relative`}>
              <TouchableHighlight onPress={toggleMenu}>
                <Image
                  source={require('../../images/bars-solid.png')}
                  style={tw`w-4 h-4`}
                />
              </TouchableHighlight>
              {menu && (
                <View
                  style={tw`right-0 absolute top-5.75 bg-gray-700 bg-opacity-100 w-[150px]`}>
                  <View>
                    {['Prefarence', 'Settings', 'Profile'].map((_, i) => (
                      <TouchableHighlight onPress={toggleMenu}>
                        <Text key={i} style={tw`text-white py-1 px-3`}>
                          {_}
                        </Text>
                      </TouchableHighlight>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={tw`mt-20 relative`}>
        <Text
          style={tw`text-4xl font-bold text-center justify-center text-black`}>
          Akash Rahman
        </Text>
      </View>
    </View>
  );
};

export default Home;
