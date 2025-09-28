// src/pages/Top.tsx
import { Link } from "react-router-dom";
import { columns, formatDate } from "../data/columns";
import Sns from "./Sns";

export default function Top() {
  // 最新3件だけ取り出し
  const latest = [...columns]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-black/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--burgundy)] via-[#ff1493] to-[var(--burgundy)]" />
        <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur text-white">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              暮らし第一。<br />柏から、日本を良くする。
            </h1>
            <p className="mt-4/6 text-white/90">
              現場主義で、子育て・教育・防災・地域経済をしっかり前へ。柏市議会で積み重ねてきた経験を、市民のために。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/aisatsu" className="btn-white">あいさつ</Link>
              <Link to="/policy" className="btn-white">政策</Link>
              <Link to="/achievements" className="btn-white">実績</Link>
              <Link to="/profile" className="btn-white">プロフィール</Link>
              <Link to="/sns" className="btn-white">SNS</Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,.3)]">
            <img src="/ai-image.webp" alt="活動写真" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ↓ここに新着コラムとSNSを追加 */}
      <section className="mt-12 space-y-10">
        {/* 新着コラム */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-[#ff1493] mb-6">
            新着コラム
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map(c => (
              <article
                key={c.id}
                className="rounded-2xl border border-[color:var(--gold)]/30 bg-white/90 p-6 shadow-sm hover:shadow transition"
              >
                <div className="text-sm text-zinc-500">{formatDate(c.date)}</div>
                <h3 className="mt-1 font-bold text-[var(--burgundy)]">{c.title}</h3>
                <Link
                  to={`/columns/${c.id}`}
                  className="mt-3 inline-flex items-center gap-1 font-semibold text-[#ff1493] hover:text-black"
                >
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link to="/columns" className="text-sm font-semibold text-[#ff1493] hover:text-black">
              コラム一覧へ →
            </Link>
          </div>
        </div>

        {/* SNSリンク */}
        <Sns />
      </section>

      {/* 画像スライド */}
      <section className="relative mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#ff1493] mb-4">
          フォトスライド
        </h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory">
            {["/ai-image.webp", "/ai-image.webp", "/ai-image.webp", "/ai-image.webp"].map(
              (src, i) => (
                <div
                  key={i}
                  className="shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-lg snap-center"
                >
                  <img src={src} alt={`スライド${i + 1}`} className="w-full h-full object-cover" />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
