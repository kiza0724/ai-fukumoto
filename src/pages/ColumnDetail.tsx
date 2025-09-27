// /src/pages/ColumnDetail.tsx
import { useParams, Link } from "react-router-dom";
import { columns, formatDate } from "../data/columns";

export default function ColumnDetail() {
  const { id } = useParams();
  const c = columns.find((v) => v.id === id);

  if (!c) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-3xl font-black mb-4">コラムが見つかりません</h2>
        <Link to="/columns" className="underline">コラム一覧へ戻る</Link>
      </section>
    );
  }

  const paragraphs = c.body.split(/\n{2,}/g);

  return (
    <article className="space-y-6">
      <nav className="text-sm">
        <Link to="/columns" className="text-[#ff1493] hover:text-black">← コラム一覧へ</Link>
      </nav>

      <header className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-sm text-zinc-500">{formatDate(c.date)}</div>
        <h1 className="mt-1 text-2xl md:text-3xl font-black text-[var(--burgundy)]">{c.title}</h1>
        {c.tags && c.tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--plum)]">
            {c.tags.map((t) => (
              <li key={t} className="rounded-full border border-black/10 px-2 py-0.5 bg-white/70">#{t}</li>
            ))}
          </ul>
        )}
      </header>

      {c.eyecatch && (
        <div className="rounded-3xl overflow-hidden ring-4 ring-white/30 shadow">
          <img src={c.eyecatch} alt={c.title} className="w-full h-auto object-cover" />
        </div>
      )}

      <div className="prose prose-zinc max-w-none bg-white rounded-3xl border border-black/10 p-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-zinc-800">{p}</p>
        ))}
      </div>
    </article>
  );
}
