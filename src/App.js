import ChatApp from "components/ChatApp";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp></ChatApp>
    </ThemeProvider>
  );
}

export default App;
