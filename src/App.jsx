import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRouter from "./routes/AppRouter"

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  )
}

export default App
