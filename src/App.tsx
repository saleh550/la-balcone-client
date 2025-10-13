
// import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from 'react-hot-toast';
import Router from "./router/Router";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './App.css'
function App() {
  AOS.init({once:false});
  
  // const queryClient = new QueryClient();
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
        <Router />
        <Toaster position="bottom-center"
          reverseOrder={false} />
      {/* </QueryClientProvider> */}
    </>
  )
}

export default App