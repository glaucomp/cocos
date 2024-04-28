import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

interface CocosWebviewComponentState {
  webViewUrl: string;
}

class CocosWebviewComponent extends Component<{}, CocosWebviewComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      webViewUrl: 'https://4545-220-233-175-162.ngrok-free.app',
    };
  }

  webViewRef: WebView | null = null;

  render() {
    const webViewStyle = {flex: 1};

    return (
      <View style={webViewStyle}>
        <WebView source={{uri: this.state.webViewUrl}} style={webViewStyle} />
      </View>
    );
  }
}

export default CocosWebviewComponent;
