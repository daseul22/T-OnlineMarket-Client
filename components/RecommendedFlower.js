import React from "react";
import {StyleSheet, Text, View, Input, TouchableOpacity, Image} from "react-native";
import styled from "styled-components";

// css part
export const RecommendedFlowerContainer = styled.TouchableOpacity`
  flex: 1;
  border: 3px solid grey
  flex-direction:row;
`;

export const RecommendedFlowerContents = styled.View`
  flex: 1;
  border: 3px solid grey;
`;

export const RecommendedFlowerImageView = styled.Image`
  flex:1;
  resize-mode: contain;
  border: 2px solid red;
`;

export const RecommendedFlowerTextView = styled.Text`
  color : red;
`;
