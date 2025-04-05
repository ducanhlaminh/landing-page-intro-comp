import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./core/AppLayout";
import routes from "./pages/pages";
import { ConfigProvider } from "antd";
function App() {
  return (
    <Router>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "#ffffff",
              headerHeight: "unset",
              headerPadding: "0px",
            },
            Menu: {
              itemMarginInline: "10px 0",
            },
          },
        }}
      >
        <AppLayout>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </AppLayout>
      </ConfigProvider>
    </Router>
  );
}

export default App;
