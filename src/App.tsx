import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Top from "./pages/Top";
import Aisatsu from "./pages/Aisatsu";
import Profile from "./pages/Profile";
import Sns from "./pages/Sns";
import NotFound from "./pages/NotFound";
import Policy from "./pages/Policy"; 
import Achievements from "./pages/Achievements"; 
import Columns from "./pages/Columns";
import ColumnDetail from "./pages/ColumnDetail";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/aisatsu" element={<Aisatsu />} />
          <Route path="/policy" element={<Policy />} /> 
          <Route path="/achievements" element={<Achievements />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/sns" element={<Sns />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/columns" element={<Columns />} />
<Route path="/columns/:id" element={<ColumnDetail />} />
        </Routes>
      </main>
      <footer className="border-t border-black/10 mt-12">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-[var(--plum)]">
          © {new Date().getFullYear()} 福元 あい 事務所
        </div>
      </footer>
    </div>
  );
}
