import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Languages: FunctionComponent = () => (
  <View style={styles.languages}>
    <TouchableOpacity
      onPress={() => {}}
      style={[
        styles.langButton,
        {
          borderColor: '#FFDBE1',
        },
      ]}
    >
      <Text style={styles.langText}>Inglês</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {}}
      style={[
        styles.langButton,
        {
          borderColor: '#FFDBE1',
        },
      ]}
    >
      <Text style={styles.langText}>Português</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  languages: {
    flexDirection: 'row',
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
    top: 58,
  },
  langButton: {
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    marginLeft: 4,
  },
  langText: {
    marginRight: 4,
    marginLeft: 4,
    color: '#FC6873',
  },
});

export default memo(Languages);
