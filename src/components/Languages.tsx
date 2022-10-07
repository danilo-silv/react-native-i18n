import React, { FunctionComponent, memo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const Languages: FunctionComponent = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n
      .changeLanguage(language)
      .then(() => {
        setCurrentLanguage(language);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.languages}>
      <TouchableOpacity
        onPress={() => changeLanguage('en')}
        style={[
          styles.langButton,
          {
            borderColor: currentLanguage === 'en' ? '#FFDBE1' : 'transparent',
          },
        ]}
      >
        <Text style={styles.langText}>Inglês</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => changeLanguage('pt')}
        style={[
          styles.langButton,
          {
            borderColor: currentLanguage === 'pt' ? '#FFDBE1' : 'transparent',
          },
        ]}
      >
        <Text style={styles.langText}>Português</Text>
      </TouchableOpacity>
    </View>
  );
};
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
