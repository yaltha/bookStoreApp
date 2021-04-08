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

import BookNewRelease from "./BookNewRelease";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import BookBestSelling from "./BookBestSelling";

const Home = ({ navigation }) => {
  const [books, setBooks] = useState(SECTIONS);

  const renderItemFlatlist = ({ item }) => {
    return <BookNewRelease item={item} navigation={navigation} />;
  };

  const renderItemSection = ({ item, section }) =>
    section.horizontal ? null : (
      <BookBestSelling item={item} navigation={navigation} />
    );

  return (
    <View style={styles._container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          sections={books}
          // sections={SECTIONS}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles._sectionHeader}>{section.sectionTitle}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItemFlatlist}
                />
              ) : null}
            </>
          )}
          renderItem={renderItemSection}
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
    backgroundColor: "#ededed",
  },
  _sectionHeader: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: "#6b6b6b",
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 5,
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
    // color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});

const SECTIONS = [
  {
    sectionTitle: "New Release",
    horizontal: true,
    data: [
      {
        key: "book_1",
        uri: "https://picsum.photos/id/1/200/300",
        title: "Book Title One",
        author: "Author Name Book One",
        pages: 250,
        price: 45.53,
        description:
          "Tempor ipsum mollit aute cillum non occaecat laboris commodo ex. Nulla commodo aute minim sit ad in nulla exercitation amet voluptate laboris ea. Ut occaecat consequat officia dolor nulla velit reprehenderit magna adipisicing dolor.",
      },
      {
        key: "book_2",
        uri: "https://picsum.photos/id/234/200/300",
        title: "Book Title Two",
        author: "Author Name Book Two",
        pages: 792,
        price: 66.29,
        description:
          "Sunt enim ex officia non ut est aute proident consequat dolore amet ex non. Labore tempor occaecat aute fugiat laboris sunt occaecat. Adipisicing elit ex cillum cillum proident. Magna do quis do deserunt cupidatat quis ullamco minim aliqua. Enim aliquip elit fugiat irure sint velit pariatur anim voluptate eiusmod ea cupidatat.",
      },
      {
        key: "book_3",
        uri: "https://picsum.photos/id/1045/200/300",
        title: "Book Title Three",
        author: "Author Name Book Three",
        pages: 792,
        price: 66.29,
        description:
          "Est veniam amet nisi consequat esse officia pariatur. Elit deserunt ex reprehenderit irure et laboris elit occaecat. Duis duis tempor aute irure velit eiusmod proident. Incididunt laborum nostrud esse duis.",
      },
    ],
  },
  {
    sectionTitle: "Best Selling",
    horizontal: false,
    data: [
      {
        key: "book_1",
        uri: "https://picsum.photos/id/554/200/300",
        title: "Book Title One",
        author: "Author Name Book One",
        pages: 250,
        price: 45.53,
        description:
          "Tempor ipsum mollit aute cillum non occaecat laboris commodo ex. Nulla commodo aute minim sit ad in nulla exercitation amet voluptate laboris ea. Ut occaecat consequat officia dolor nulla velit reprehenderit magna adipisicing dolor.",
      },
      {
        key: "book_2",
        uri: "https://picsum.photos/id/889/200/300",
        title: "Book Title Two",
        author: "Author Name Book Two",
        pages: 792,
        price: 66.29,
        description:
          "Sunt enim ex officia non ut est aute proident consequat dolore amet ex non. Labore tempor occaecat aute fugiat laboris sunt occaecat. Adipisicing elit ex cillum cillum proident. Magna do quis do deserunt cupidatat quis ullamco minim aliqua. Enim aliquip elit fugiat irure sint velit pariatur anim voluptate eiusmod ea cupidatat.",
      },
      {
        key: "book_3",
        uri: "https://picsum.photos/id/546/200/300",
        title: "Book Title Three",
        author: "Author Name Book Three",
        pages: 792,
        price: 66.29,
        description:
          "Est veniam amet nisi consequat esse officia pariatur. Elit deserunt ex reprehenderit irure et laboris elit occaecat. Duis duis tempor aute irure velit eiusmod proident. Incididunt laborum nostrud esse duis.",
      },
    ],
  },
];
