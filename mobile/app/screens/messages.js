import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/listItem";
import ListItemSeparator from "../components/listItemSeparator";
import ListItemDeleteAction from "../components/listItemDeleteAction";

const initMessage = [
  { id: 1, title: "T1", desc: "D1", image: require("../assets/mosh.jpg") },
  { id: 2, title: "T2", desc: "D2", image: require("../assets/mosh.jpg") },
];

function Messages() {
  const [messages, setMessages] = useState(initMessage);
  const [refresh, setRefresh] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((i) => i.id !== message.id));
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(m) => m.id + ""}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          desc={item.desc}
          image={item.image}
          onPress={() => console.log("nice")}
          rightAction={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refresh}
      onRefresh={() =>
        setMessages([
          ...messages,
          {
            id: messages.lastIndex + 2,
            title: "T3",
            desc: "D3",
            image: require("../assets/mosh.jpg"),
          },
        ])
      }
    />
  );
}

export default Messages;
