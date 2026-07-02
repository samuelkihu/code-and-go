import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import WelcomePage from "./WelcomePage";
import LearnPage from "./LearnPage";
import LessonPage from "./LessonPage";
import SnippetsPage from "./SnippetsPage";
import PlaygroundPage from "./PlaygroundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="learn/:lessonId" element={<LessonPage />} />
          <Route path="snippets" element={<SnippetsPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;