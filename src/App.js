import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import { DefaultLayout } from "./components/Layout/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((s, index) => {
            const Layout = s.Layout === null ? <></> : DefaultLayout;
            const Page = s.component;
            return (
              <Route
                key={index}
                path={s.path}
                element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
