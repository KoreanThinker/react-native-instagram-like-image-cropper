# react-native-instagram-like-image-cropper
(‼️ Deprecated) The component like instagram image cropper

## Preview

<img src="https://github.com/KoreanThinker/react-native-instagram-like-image-cropper/blob/main/gifs/iphone.gif" alt="preview" width="300px" />

## Getting started
### First, install peer packages
- [react-native-gesture-handler@^1.10.0](https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/)
- [react-native-reanimated@2.2.4](https://docs.swmansion.com/react-native-reanimated/docs/2.2.0/)
- [react-native-image-editor@^2.3.0](https://github.com/callstack/react-native-image-editor)
### Second, install package
`npm install react-native-instagram-like-image-cropper --save`
or
`yarn add react-native-instagram-like-image-cropper`

### Thired, pod install
`cd ios && pod install && cd ..`

## Usage
```javascript
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import InstagramLikeImageCropper from '../src';

const App = () => {
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  return (
    <View >
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
    </View>
  );
};
```

## Props
```ts
export interface InstagramLikeImageCropperProps {
  image: { // required
    uri: string;
    width: number;
    height: number;
  };
  width?: number; // default Dimensions.get('window').width
  height?: number; // default Dimensions.get('window').width
  grid?: boolean; // default true
  gridVerticalNum?: number; // default 2
  gridHorizontalNum?: number; // default 2
  gridColor?: string; // default '#fff'
  onCropped?: (data: CroppedData) => void;
  maxScale?: number;  // default 2 / range 1 ~ ∞
}

export interface CroppedData {
  croppedUri: string;
  originalUri: string;
}
```
