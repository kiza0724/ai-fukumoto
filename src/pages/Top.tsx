// src/pages/Top.tsx
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <>
      {/* Hero：深紫→ボルドーの上品グラデに薄金の縁取り */}
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
              <Link
                to="/aisatsu"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60"
              >
                あいさつ
              </Link>
              <Link
                to="/policy"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60"
              >
                政策
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60"
              >
                実績
              </Link>
              <Link
                to="/profile"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60"
              >
                プロフィール
              </Link>
              <Link
                to="/sns"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60"
              >
                SNS
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,.3)]">
            <img src="/ai-image.webp" alt="活動写真" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 下に余白を少し */}
      <div className="h-6" />

      {/* 画像スライドセクション（snap-centerで中央に止まる） */}
      <section className="relative mt-2">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--burgundy)] mb-4">
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
