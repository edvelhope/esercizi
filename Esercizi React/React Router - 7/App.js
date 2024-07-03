import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";
import GithubUserListIndex from "./GithubUserListIndex";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<GithubUserListIndex />} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
