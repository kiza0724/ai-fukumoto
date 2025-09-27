import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// 既存の NAV に1行追加
const NAV = [
  { to: "/", label: "TOP" },
  { to: "/aisatsu", label: "あいさつ" },
  { to: "/policy", label: "政策" },
  { to: "/achievements", label: "実績" },
  { to: "/columns", label: "コラム" }, // ← 追加
  { to: "/profile", label: "プロフィール" },
  { to: "/sns", label: "SNS" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

// 艶やか：非アクティブはグラデ文字、アクティブは黒＋下線にdeeppink
const base = "relative transition-colors";
const deco = "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:rounded-full after:bg-[#ff1493]/70 hover:after:w-8 after:transition-all";
const inactive = "text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#ff1493]";
const active = "text-black after:w-6";


  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow">
        <div className="mx-auto max-w-7xl h-16 flex items-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--burgundy)] to-[var(--plum)]">
          <a href="/" className="flex gap-3">
            <h1 className="font-black text-2xl md:text-3xl text-[#ff1493]">
              福元 あい
            </h1>
            <h3 className="self-end font-semibold text-sm md:text-base text-[#ff1493]">
              Official Site
            </h3>
          </a>

          <nav className="hidden md:flex gap-6 font-bold ml-auto">
            {NAV.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `${base} ${deco} ${isActive ? active : inactive}`
                }
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="md:hidden ml-auto text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff1493] to-[#ff1493]"
            onClick={() => setOpen(v => !v)}
            aria-label="メニュー"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <nav className="fixed top-16 inset-x-0 z-50 md:hidden bg-white border-t border-black/10 rounded-b-2xl shadow-xl">
            <ul className="flex flex-col gap-2 px-4 py-4 text-center">
              {NAV.map(n => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-semibold text-[#ff1493] hover:text-black"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
