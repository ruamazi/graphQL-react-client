import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header";
import { client } from "../config/appollo-config";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
