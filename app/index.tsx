import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { useCoins } from "../hook/useCoins";
import { useNetworkStatus } from "../hook/useNetworkStatus";

import CoinCard from "../components/CoinCard";
import LoadingView from "../components/loadingView";
import ErrorView from "../components/errorView";
import OfflineBanner from "../components/OfflineBanner";

export default function Index() {
  // useInfiniteQuery returns initial data + states and function to load following pages + states
  const { data, isLoading, isError, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = useCoins();
  const { isOffline } = useNetworkStatus();

  const handleRefresh = async () => {
    await refetch();
  };

  if (isLoading) {
    return <LoadingView message="Loading coins..." />;
  }

  if (isError) {
    return <ErrorView message="Failed to load coins" onRetry={refetch} />;
  }

  // useInfiniteQuery return data as an array of the previous data + the new fetched one so we flaten this array
  const coins = data?.pages.flatMap((page) => page) ?? [];

  return (
    <View style={styles.container}>
      {isOffline && <OfflineBanner />}

      <FlatList
        // data is the source
        data={coins}
        // keyextractor for the key
        keyExtractor={(item) => item.id}
        // renderitem use an item from data
        renderItem={({ item }) => <CoinCard coin={item} />}
        // callback when end of list is reached
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        // Distance from end of list where the bottom is considered reached
        onEndReachedThreshold={0.5}
        // Component to show on next page load
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        refreshing={isLoading}
        onRefresh={() => {
          handleRefresh();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
