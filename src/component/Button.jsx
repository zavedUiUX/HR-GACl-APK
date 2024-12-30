import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={container} className="items-center">
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        style={button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </View>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 160,
  position: "relative",
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
};

const button = {
  backgroundColor: "#0cdcf7",
  color: "white",

  borderRadius: "10px",
  padding: "10px 20px",
  //color: "#0f1115",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
};
