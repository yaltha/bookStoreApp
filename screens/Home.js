import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";

// import datas from "../datas/books.json";

import Book from "./Book";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [books, setBooks] = useState(SECTIONS);

  const Book = ({ item }) => {
    return (
      <View style={styles._book}>
        <Image
          source={{ uri: item.uri }}
          style={styles._bookImage}
          resizeMode="cover"
        />
        <Text style={styles._bookTitle}>{item.title}</Text>
      </View>
    );
  };

  const renderItem = ({ item, section }) => {
    return <Book item={item} />;
  };

  // <TouchableOpacity
  //   onPress={() => {
  //     navigation.navigate("BookProfile", { itemId: item.id });
  //   }}
  // >
  //   <Book style={styles._book} title={item.title} image={item.image} />
  // </TouchableOpacity>

  return (
    <View style={styles._container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          sections={books}
          // sections={SECTIONS}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <Text style={styles._sectionHeader}>{section.sectionTitle}</Text>
          )}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  _container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#121212",
  },
  _sectionHeader: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 10,
  },
  _book: {
    margin: 10,
  },
  _bookImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  _bookTitle: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});

const SECTIONS = [
  {
    sectionTitle: "New Release",
    data: [
      {
        key: "book_1",
        uri: "https://picsum.photos/id/1/200/300",
        title: "Book Title One",
        author: "Author Name Book One",
        pages: 250,
        price: 45.53,
        decription:
          "Tempor ipsum mollit aute cillum non occaecat laboris commodo ex. Nulla commodo aute minim sit ad in nulla exercitation amet voluptate laboris ea. Ut occaecat consequat officia dolor nulla velit reprehenderit magna adipisicing dolor.",
      },
      {
        key: "book_2",
        uri: "https://picsum.photos/id/234/200/300",
        title: "Book Title Two",
        author: "Author Name Book Two",
        pages: 792,
        price: 66.29,
        decription:
          "Sunt enim ex officia non ut est aute proident consequat dolore amet ex non. Labore tempor occaecat aute fugiat laboris sunt occaecat. Adipisicing elit ex cillum cillum proident. Magna do quis do deserunt cupidatat quis ullamco minim aliqua. Enim aliquip elit fugiat irure sint velit pariatur anim voluptate eiusmod ea cupidatat.",
      },
      {
        key: "book_3",
        uri: "https://picsum.photos/id/1045/200/300",
        title: "Book Title Three",
        author: "Author Name Book Three",
        pages: 792,
        price: 66.29,
        decription:
          "Est veniam amet nisi consequat esse officia pariatur. Elit deserunt ex reprehenderit irure et laboris elit occaecat. Duis duis tempor aute irure velit eiusmod proident. Incididunt laborum nostrud esse duis.",
      },
    ],
  },
  {
    sectionTitle: "Best Selling",
    data: [
      {
        key: "book_1",
        uri: "https://picsum.photos/id/554/200/300",
        title: "Book Title One",
        author: "Author Name Book One",
        pages: 250,
        price: 45.53,
        decription:
          "Tempor ipsum mollit aute cillum non occaecat laboris commodo ex. Nulla commodo aute minim sit ad in nulla exercitation amet voluptate laboris ea. Ut occaecat consequat officia dolor nulla velit reprehenderit magna adipisicing dolor.",
      },
      {
        key: "book_2",
        uri: "https://picsum.photos/id/889/200/300",
        title: "Book Title Two",
        author: "Author Name Book Two",
        pages: 792,
        price: 66.29,
        decription:
          "Sunt enim ex officia non ut est aute proident consequat dolore amet ex non. Labore tempor occaecat aute fugiat laboris sunt occaecat. Adipisicing elit ex cillum cillum proident. Magna do quis do deserunt cupidatat quis ullamco minim aliqua. Enim aliquip elit fugiat irure sint velit pariatur anim voluptate eiusmod ea cupidatat.",
      },
      {
        key: "book_3",
        uri: "https://picsum.photos/id/546/200/300",
        title: "Book Title Three",
        author: "Author Name Book Three",
        pages: 792,
        price: 66.29,
        decription:
          "Est veniam amet nisi consequat esse officia pariatur. Elit deserunt ex reprehenderit irure et laboris elit occaecat. Duis duis tempor aute irure velit eiusmod proident. Incididunt laborum nostrud esse duis.",
      },
    ],
  },
];
