import React from 'react';
import { Icon, Footer, FooterTab, Button } from 'native-base';
import { View } from 'react-native';

export default ({ children, acceptPage, history }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 0.91 }}>{children}</View>
    <Footer style={{ flex: 0.09 }}>
      <FooterTab>
        <Button active={!acceptPage} onPress={() => acceptPage && history.push('/CreateShelter')}>
          <Icon active={!acceptPage} name="home" />
        </Button>
        <Button active={acceptPage} onPress={() => !acceptPage && history.push('/GuestList')}>
          <Icon active={acceptPage} name="checkmark" />
        </Button>
      </FooterTab>
    </Footer>
  </View>
);
