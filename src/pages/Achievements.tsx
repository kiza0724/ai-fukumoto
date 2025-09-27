// 実績：数字・成果を端的に“見える化”
export default function Achievements() {
  const facts = [
    { kpi: "保育定員 +120", note: "年度内の受け皿拡充に道筋" },
    { kpi: "通学路 12箇所 改修", note: "歩車分離と視認性改善" },
    { kpi: "商店支援 48件", note: "小規模事業のDX導入を伴走" },
  ];

  const stories = [
    {
      h: "“困りごと”から始める予算提案",
      p: "ヒアリング→現地確認→試行導入→効果測定のサイクルで、机上では拾えない改善を積み上げました。",
    },
    {
      h: "女性視点の避難所運営",
      p: "授乳・更衣・衛生の区画設計を提案。備品の更新と運用手順を見直し、実地訓練まで接続。",
    },
  ];

  return (
    <section className="space-y-8">
      <header className="relative overflow-hidden rounded-3xl border border-black/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--burgundy)] via-[#ff1493] to-[var(--burgundy)]" />
        <div className="relative p-8 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-black">実績</h2>
          <p className="mt-3 text-white/90">
            数字は控えめに、効果は確かに。小さな前進を、生活の実感へ
          </p>
        </div>
      </header>

      {/* KPI グリッド */}
      <div className="grid gap-4 sm:grid-cols-3">
        {facts.map((f) => (
          <div
            key={f.kpi}
            className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm"
          >
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#ff1493]">
              {f.kpi}
            </div>
            <div className="mt-1 text-sm text-zinc-600">{f.note}</div>
          </div>
        ))}
      </div>

      {/* ストーリーカード */}
      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((s) => (
          <article
            key={s.h}
            className="rounded-3xl border border-[color:var(--gold)]/30 bg-white/90 p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[var(--burgundy)]">{s.h}</h3>
            <p className="mt-2 text-zinc-700">{s.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
