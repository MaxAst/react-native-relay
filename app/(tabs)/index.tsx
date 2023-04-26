import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import loadSerializableQuery from "../../src/relay/loadSerializableQuery";

import TwoQueryNode, { twoQuery } from "../../__generated__/twoQuery.graphql";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text
        onPress={async () => {
          const result = await loadSerializableQuery<
            typeof TwoQueryNode,
            twoQuery
          >(TwoQueryNode.params, {});
          router.push({
            pathname: "/movies",
            params: { queryRef: JSON.stringify(result) },
          });
        }}
      >
        Go to movies tab
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
