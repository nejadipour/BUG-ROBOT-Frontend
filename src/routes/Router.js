import { Routes, Route, Navigate } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";
import NotFound from "../pages/NotFound";
import Menu from "../pages/Menu";
import Game from "../pages/Game";

export default function Router(props) {
    return (
        <Routes>
            <Route element={<LandingLayout />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/game" element={<Game />} />
                <Route path="/home" element={<Menu />} />
            </Route>
        </Routes>
    );
}
