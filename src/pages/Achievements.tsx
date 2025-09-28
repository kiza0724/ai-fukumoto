// src/pages/Achievements.tsx
// 実績：画像つきストーリーカード（6件）
export default function Achievements() {
  const stories = [
    {
      h: "“困りごと”から始める予算提案",
      p: "ヒアリング→現地確認→試行導入→効果測定のサイクルで、机上では拾えない改善を積み上げました。",
      img: "/achievements/ai-image.webp",
      alt: "住民ヒアリングの様子",
    },
    {
      h: "女性視点の避難所運営",
      p: "授乳・更衣・衛生の区画設計を提案。備品の更新と運用手順を見直し、実地訓練まで接続。",
      img: "/achievements/shelter-planning.jpg",
      alt: "避難所レイアウトの検討",
    },
    {
      h: "通学路の安全性向上",
      p: "歩車分離と視認性改善を軸に、交差点形状・カラー舗装・標識を総点検。現場での小改修を迅速に実施。",
      img: "/achievements/safe-school-road.jpg",
      alt: "スクールゾーンの改修",
    },
    {
      h: "保育の受け皿を拡充",
      p: "現場の人員配置と設備更新に重点投資。年度内の増員見込みを関係機関と詰め、待機緩和を前倒し。",
      img: "/achievements/nursery-capacity.jpg",
      alt: "保育施設の設備更新",
    },
    {
      h: "商店のDX伴走支援",
      p: "決済・在庫・SNS広報の“最小セット”を店舗規模に合わせて導入。補助金申請から効果測定まで伴走。",
      img: "/achievements/sme-dx.jpg",
      alt: "小規模事業のDX導入",
    },
    {
      h: "地域防災のボトルネック解消",
      p: "用水・電源・道路の課題を洗い出し。停電時の電力確保や簡易給水ルートを平時から運用訓練。",
      img: "/achievements/infrastructure-resilience.jpg",
      alt: "非常用電源の点検",
    },
  ];

  return (
    <section className="space-y-8">
      {/* セクションヘッダ */}
      <header className="relative overflow-hidden rounded-3xl border border-black/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--burgundy)] via-[#ff1493] to-[var(--burgundy)]" />
        <div className="relative p-8 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-black">実績</h2>
          <p className="mt-3 text-white/90">
            数字より、暮らしの実感へ。現場起点で小さな前進を重ねています。
          </p>
        </div>
      </header>

      {/* ストーリーカード（6件） */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <article
            key={s.h}
            className="group rounded-3xl border border-[color:var(--gold)]/30 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* 画像（なければグラデ代替） */}
            {s.img ? (
              <div className="relative h-44 md:h-48 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-inset ring-0 group-hover:ring-4 group-hover:ring-white/40 transition" />
              </div>
            ) : (
              <div className="h-44 md:h-48 w-full bg-gradient-to-br from-[var(--burgundy)]/20 via-white to-[var(--gold)]/20" />
            )}

            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold text-[var(--burgundy)] tracking-tight">
                {s.h}
              </h3>
              <p className="mt-2 text-zinc-700 leading-relaxed">{s.p}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
