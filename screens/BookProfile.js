import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome } from "@expo/vector-icons";

const BookProfile = ({ navigation, route }) => {
  const { itemId } = route.params;
  return (
    <View>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      {/* <TouchableOpacity
        style={styles._btnBack}
        onPress={() => navigation.goBack()}
      >
        {" "}
        <FontAwesome name="left-arrow" size={32} color="lightgrey" />
      </TouchableOpacity> */}

      {/* <View>{image}</View>
      <Text>{title}</Text>
      <Text>{author}</Text>
      <View></View>
      <Text>{price}</Text>

      <TouchableOpacity>
        <Text>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Add to Cart</Text>
      </TouchableOpacity> */}

      {/* <Text>
        Title:
        <Text>{title}</Text>
      </Text>
      <Text>
        Author:
        <Text>{author}</Text>
      </Text>
      <Text>
        Release Date:
        <Text>{releaseDate}</Text>
      </Text>
      <Text>
        Rating:
        <Text>{rating}</Text>
      </Text>
      <Text>
        Description:
        <Text>{descriptions}</Text>
      </Text> */}
    </View>
  );
};

export default BookProfile;

const styles = StyleSheet.create({
  _btnBack: {
    width: 50,
    height: 50,
  },
});
