import { Routes, Route } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout"
import NotFound from "../pages/NotFound";

export default function Router(props) {
    return (
        <Routes>
            <Route element={<LandingLayout />}>
            <Route path='*' element={<NotFound />} />

            </Route>

        </Routes>
    )

}