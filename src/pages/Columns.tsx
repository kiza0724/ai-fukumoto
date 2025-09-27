// /src/pages/Columns.tsx
import { Link } from "react-router-dom";
import { columns, formatDate } from "../data/columns";

export default function Columns() {
  const list = [...columns].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="space-y-6">
      <header className="relative overflow-hidden rounded-3xl border border-black/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--burgundy)] via-[#ff1493] to-[var(--burgundy)]" />
        <div className="relative p-8 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-black">コラム</h2>
          <p className="mt-3 text-white/90">活動の背景や考え方を、丁寧に。</p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((c) => (
          <article
            key={c.id}
            className="rounded-3xl border border-[color:var(--gold)]/30 bg-white/90 overflow-hidden shadow-sm hover:shadow transition"
          >
            {c.eyecatch && (
              <div className="h-48 w-full overflow-hidden">
                <img src={c.eyecatch} alt={c.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6">
              <div className="text-sm text-zinc-500">{formatDate(c.date)}</div>
              <h3 className="mt-1 text-xl font-bold text-[var(--burgundy)]">{c.title}</h3>
              {c.tags && c.tags.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--plum)]">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full border border-black/10 px-2 py-0.5 bg-white/70">
                      #{t}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4">
                <Link
                  to={`/columns/${c.id}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#ff1493] hover:text-black"
                >
                  続きを読む →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
