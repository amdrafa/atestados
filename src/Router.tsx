import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout";
import { Home } from "./pages/settings";
import { Requests } from "./pages/requests";
import { RequestDetail } from "./pages/requests/RequestDetail";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/requests" element={<Layout><Requests /></Layout>} />
            <Route path="/requests/:id" element={<Layout><RequestDetail /></Layout>} />
        </Routes>
    );
}