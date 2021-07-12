import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = (props) => {
  return (
    <View style={styles.container}>
      <Text style={props.textStyle}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Message;
