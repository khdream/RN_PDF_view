/* @flow */
import React, { Fragment } from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import PDFView from 'react-native-view-pdf';

const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://firebasestorage.googleapis.com/v0/b/tumtag-reactnative-app.appspot.com/o/product%2Ftest.pdf?alt=media&token=0a966301-0973-4e12-8761-8cba323dbe6d',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class App extends React.Component {
  render() {
    const resourceType = 'url';

    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}