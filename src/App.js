import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Navbar from "./components/navbar/Navbar";
import VideoDetail from "./components/VideoDetail";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="video/:id" element={<VideoDetail />} />
            </Routes>
        </>
    );
}

export default App;
