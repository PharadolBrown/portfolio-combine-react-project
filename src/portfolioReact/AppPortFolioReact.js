import PageHome from "./PageHome";
import Page404 from "./Page404";

import AppAlbum from "../AllApp/AppAlbum/AppAlbum";
import AppTreatise from "../AllApp/AppTreatise/AppTreatise";
import DynamicPage from "../AllApp/AppTreatise/DynamicPage";
import AppNote from "../AllApp/AppNoteStory/AppNote";
import AppToDoList from "../AllApp/AppToDoList/AppToDoList";
import AppTypingTest from "../AllApp/AppTypingTest/AppTypingTest";

import { Switch, Route } from "react-router-dom";


export default function AppPortFolioReact() {
  return (
    <div className="bg-gray-100 ">
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>
        <Route path="/AppAlbum">
          <AppAlbum />
        </Route>
        <Route path="/AppTreatise">
          <AppTreatise />
        </Route>
        <Route path="/post/:postId">
          <div className="bg-gray-900 pt-16">
            <DynamicPage />
          </div>
        </Route>
        <Route path="/AppNote">
          <AppNote />
        </Route>
        <Route path="/AppToDoList">
          <AppToDoList />
        </Route>
        <Route path="/AppTypingTest">
          <div className="bg-gradient-to-r from-blue-900 to-green-500 h-screen">
            <AppTypingTest />
          </div>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}
