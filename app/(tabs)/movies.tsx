import { useSearchParams } from "expo-router";
import { Suspense } from "react";
import { FlatList, StyleSheet } from "react-native";
import { graphql, usePreloadedQuery } from "react-relay";
import { ConcreteRequest } from "relay-runtime";

import { Text, View } from "../../components/Themed";
import environment from "../../src/relay/environment";
import { SerializablePreloadedQuery } from "../../src/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "../../src/relay/useSerializableQuery";

import type { moviesQuery } from "../../__generated__/moviesQuery.graphql";

export const MoviesQuery = graphql`
  query moviesQuery {
    allFilms {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

type Props = {
  preloadedQuery: SerializablePreloadedQuery<ConcreteRequest, moviesQuery>;
};

function Movies({ preloadedQuery }: Props) {
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);
  const data = usePreloadedQuery(MoviesQuery, queryRef);
  return (
    <FlatList
      style={styles.list}
      data={data.allFilms?.edges}
      keyExtractor={(item) => item?.node?.id ?? ""}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item?.node?.title}</Text>
        </View>
      )}
    />
  );
}

export default function TabTwoScreen() {
  const params = useSearchParams();

  return (
    <Suspense fallback={<Text>loading...</Text>}>
      <View style={styles.container}>
        {params.queryRef && typeof params.queryRef === "string" && (
          <Movies preloadedQuery={JSON.parse(params.queryRef)} />
        )}
      </View>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: { width: "100%" },
  listItem: { padding: 10, borderBottomWidth: 1, width: "80%" },
});
