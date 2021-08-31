import HomePage from "./HomePage";
import DynamicPage from "./DynamicPage";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <div>
      <Switch>
        <Route path="/AppTreatise" exact>
          <HomePage />
        </Route>
        <Route path="/post/:postId">
          <div className="bg-gray-800 pt-20">
            <DynamicPage />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default AppRouter;
