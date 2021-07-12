import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.buttonStyle}}
      onPress={props.pressHandler}
      underlayColor="#334257"
    >
      <Text style={styles.buttontext}>{props.titleText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      marginRight: 60,
      marginLeft: 60,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#334257',
      borderRadius: 35,
      borderWidth: 1,
      borderColor: '#334257',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttontext: {
        fontSize: 17,
        color: '#EEEEEE',
    },
  });

export default CustomButton;
