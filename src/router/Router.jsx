import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../Components/pages/Top";
import { Users } from "../Components/pages/Users";
import { HeaderOnly } from "../Components/Templete/HeaderOnly";
import { Layout } from "../Components/Templete/Layout";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Top />
          </Layout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
