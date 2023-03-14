import { Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import MyAppointments from "./pages/MyAppointments";
import Favorite from "./pages/Favorite";
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <ScheduleAppointment />
          </Route>
          <Route path="/MyAppointments">
            <MyAppointments />
          </Route>
          <Route path="/Favorite">
            <Favorite />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
