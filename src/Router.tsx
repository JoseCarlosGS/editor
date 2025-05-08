import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"
import GraphicEditor from "./views/DesignEditor/GraphicEditor"
import Error403 from "./views/Errors/403"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/deisgn" element={<DesignEditor />} />
        <Route path="/project" element={<GraphicEditor />} />
        <Route path="/" element={<GraphicEditor />} />
        <Route path="/error" element={<Error403 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
