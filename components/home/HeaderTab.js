import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function HeaderTab({ activeTab, setActiveTab }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === text ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => setActiveTab(text)}
      >
        <Text
          style={{
            color: activeTab === text ? "white" : "black",
            fontSize: 15,
            fontWeight: "900",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
