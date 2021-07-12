import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Message from "../components/Message";

let intervalId = null;

const timeCounter = (seconds, direction, setter) => {
  intervalId = setInterval(() => {
    if (direction == "down" && seconds !== 0) {
      return setter(seconds--);
    } else if (direction == "up" && seconds !== 6) {
      return setter(seconds++);
    }
  }, 1000);
};

const StartScreen = () => {
  const [timer, setTimer] = useState(10);
  const [isTimerRunning, setIstimerRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [message, setMessage] = useState("");
  const [rounds, setRounds] = useState(0);
  const [over, setOver] = useState(false);
  const [squzee, setSquzee] = useState(true);
  const [release, setRelease] = useState(false);


// useEffect(() => {
//   setSquzee(false)
// }, [timer===1])

  const startHandler = () => {
    setIstimerRunning(true);
    if (squzee){
      setMessage('SQUZEE')
      timeCounter(timer, "down", setTimer);

        setSquzee(false)

    } 
    if(!squzee) {
      setMessage('Relax')
      timeCounter(timer, "up", setTimer);
      if (timer === 5) {
        setSquzee(true)
      }
    }
  };

  console.log(timer);
  const playHandler = () => {
    setIsPause(false);
    setMessage("SQUZEE");
    startHandler();
  };

  const pauseHandler = () => {
    setIsPause(true);
    setMessage("PAUSED");
    clearInterval(intervalId);
  };

  const resetHandler = () => {
    clearInterval(intervalId);
    setIstimerRunning(false);
    setIsPause(false);
    setMessage("");
    setTimer(10);
  };

  let content;
  if (isTimerRunning) {
    content = (
      <View>
        {!isPause ? (
          <CustomButton pressHandler={pauseHandler} titleText="PAUSE" />
        ) : (
          <CustomButton pressHandler={playHandler} titleText="PLAY" />
        )}
        <CustomButton
          pressHandler={resetHandler}
          titleText="RESET"
          buttonStyle={styles.resetButtonStyle}
        />
      </View>
    );
  } else if (!isTimerRunning) {
    content = (
      <CustomButton
        pressHandler={startHandler}
        btnColor="#548CA8"
        titleText="START"
      />
    );
  }

  return (
    <View>
      {isTimerRunning && (
        <Message
          textStyle={
            message === "SQUZEE"
              ? styles.squzeeStyle
              : message === "PAUSED"
              ? styles.pauseStyle
              : null
          }
          message={message}
        />
      )}
      <Card style={styles.card}>
        <Text style={styles.timer}>{timer}</Text>
      </Card>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  resetButtonStyle: {
    backgroundColor: "red",
    marginTop: 10,
  },
  timer: {
    fontSize: 120,
    color: "#334257",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 90,
    marginRight: 90,
    marginBottom: 20,
    shadowColor: "#476072",
    padding: 0,
  },
  pauseStyle: {
    color: "red",
    fontSize: 20,
  },
  squzeeStyle: {
    color: "green",
    fontSize: 20,
  },
  releaseStyle: {
    color: "red",
  },
});

export default StartScreen;
