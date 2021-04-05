import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Account = ({ navigation }) => {
  return (
    <View style={styles._container}>
      <View>
        <TouchableOpacity>
          {" "}
          <FontAwesome name="left-arrow" size={32} color="lightgrey" />
        </TouchableOpacity>
        <View>
          <Text>Jaydon Arcand</Text>
          <Text>Member since 2020</Text>
        </View>
      </View>
      <Text>Your deposit:</Text>
      <Text>$ 535.76</Text>
      //?{/* your purchased book */}
      <View>
        <FlatList
          data={datas}
          renderItem={({ book }) => (
            <Book book={book} navigation={navigation} />
          )}
          keyExtractor={(book) => book.id}
          horizontal={true}
        />
      </View>
      //?{/* currently read */}
      <View>
        <FlatList
          data={datas}
          renderItem={({ book }) => (
            <Book book={book} navigation={navigation} />
          )}
          keyExtractor={(book) => book.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
