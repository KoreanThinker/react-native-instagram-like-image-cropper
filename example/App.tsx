import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import InstagramLikeImageCropper from 'react-native-instagram-like-image-cropper';

const App = () => {
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  return (
    <View>
      <GestureHandlerRootView>
        <InstagramLikeImageCropper
          onCropped={data => setCroppedImage(data.croppedUri)}
          image={{
            width: 1600,
            height: 700,
            uri: 'https://dummyimage.com/1600x700/b5b5b5/ffffff.png',
          }}
        />
        <Text>Cropped image</Text>
        {croppedImage && (
          <Image source={{uri: croppedImage}} style={styles.image} />
        )}
      </GestureHandlerRootView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
