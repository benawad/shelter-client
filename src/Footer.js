import React from 'react';
import { Icon, Footer, FooterTab, Button } from 'native-base';
import { View } from 'react-native';

export default ({ children }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 0.91 }}>{children}</View>
    <Footer style={{ flex: 0.09 }}>
      <FooterTab>
        <Button active>
          <Icon active name="navigate" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  </View>
);
