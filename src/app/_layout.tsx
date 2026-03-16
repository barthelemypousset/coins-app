import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a react query client and wrap our app with it
const queryClient = new QueryClient();

export default function Layout() {
  return (
  <QueryClientProvider client={queryClient}>
    {/* Create a stack navigator based on the files in /app folder */}
    <Stack />
  </QueryClientProvider>
);
}
