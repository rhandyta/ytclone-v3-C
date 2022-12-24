import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
            </Routes>
        </>
    );
}

export default App;
