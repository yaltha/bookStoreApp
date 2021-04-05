import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BookProfile = ({ navigation, book }) => {
  return (
    <View>
      <TouchableOpacity style={} onPress={() => navigation.goBack()}>
        {" "}
        <FontAwesome name="left-arrow" size={32} color="lightgrey" />
      </TouchableOpacity>
      <View>{book.image}</View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <View></View>
      <Text>{book.price}</Text>

      <TouchableOpacity>
        <Text>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Add to Cart</Text>
      </TouchableOpacity>

      {/* book details */}
      <Text>
        Title:
        <Text>{book.title}</Text>
      </Text>
      <Text>
        Author:
        <Text>{book.author}</Text>
      </Text>
      <Text>
        Release Date:
        <Text>{book.releaseDate}</Text>
      </Text>
      <Text>
        Rating:
        <Text>{book.rating}</Text>
      </Text>
      <Text>
        Description:
        <Text>{book.descriptions}</Text>
      </Text>
    </View>
  );
};

export default BookProfile;

const styles = StyleSheet.create({});
