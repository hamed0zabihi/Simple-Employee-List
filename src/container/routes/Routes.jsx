import React from "react";
import MainLaout from "../../component/MainLayout/MainLayout";
import { Switch, Route } from "react-router";
import Home from "../home/Home";
import Met from "../met/Met";

const Routes = () => {
  return (
    <Switch>
      <MainLaout>
        <Route exact path="/" component={Home} />
        <Route exact path="/met" component={Met} />
      </MainLaout>
    </Switch>
  );
};

export default Routes;
