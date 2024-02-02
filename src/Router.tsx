import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout";
import { Home } from "./pages/settings";
import { Requests } from "./pages/requests";
import { RequestDetail } from "./pages/requests/RequestDetail";
import { Users } from "./pages/users";
import { UserForm } from "./pages/users/UserForm";
import { UserRequests } from "./pages/userRequests";
import { UserRequestCreate } from "./pages/userRequests/create";
import { FileFormContextProvider } from "./contexts/FileFormContext.tsx/context";

export function Router() {
    return (
        <FileFormContextProvider>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/adminRequests" element={<Layout><Requests /></Layout>} />
                <Route path="/adminRequests/:id" element={<Layout><RequestDetail /></Layout>} />
                <Route path="/users" element={<Layout><Users /></Layout>} />
                <Route path="/users/:id" element={<Layout><UserForm /></Layout>} />
                <Route path="/requests" element={<Layout><UserRequests /></Layout>} />
                <Route path="/requests/create" element={<Layout><UserRequestCreate /></Layout>} />
            </Routes >
        </FileFormContextProvider >
    );
}