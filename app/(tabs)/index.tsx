import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import loadSerializableQuery from "../../src/relay/loadSerializableQuery";

import MoviesQueryNode, {
  moviesQuery,
} from "../../__generated__/moviesQuery.graphql";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text
        onPress={async () => {
          const result = await loadSerializableQuery<
            typeof MoviesQueryNode,
            moviesQuery
          >(MoviesQueryNode.params, {});
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
