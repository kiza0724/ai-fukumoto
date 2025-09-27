// 政策：妖艶シックなカードで要点を端的に
export default function Policy() {
  const items = [
    {
      title: "子育てと教育を、まっすぐ支える。",
      body:
        "保育の現場に資源を直送。待機と人手不足の二重苦を減らし、家庭が“今”必要な支援を受け取れる導線を整える。",
      points: ["保育士処遇の底上げ", "学童の受け皿拡大", "教育ICTの実装支援"],
    },
    {
      title: "防災は“生活インフラ”から。",
      body:
        "備えは倉庫だけじゃない。道路・用水・電源のボトルネックを点検し、非常時も暮らしを止めない都市管理へ。",
      points: ["避難所の質改善", "女性視点の防災備品", "停電時の電力確保"],
    },
    {
      title: "地元経済に、確かな追い風。",
      body:
        "小さな事業が続くまちへ。商店・子育て・福祉を巡回させる地域投資で“人の流れ”を育てる。",
      points: ["中小のデジタル化支援", "空き店舗の再生", "市内調達の促進"],
    },
  ];

  return (
    <section className="space-y-8">
      <header className="relative overflow-hidden rounded-3xl border border-black/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--burgundy)] via-[#ff1493] to-[var(--burgundy)]" />
        <div className="relative p-8 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-black">政策</h2>
          <p className="mt-3 text-white/90">
            生活の温度を上げる、実務ベースの政策だけを。飾らず、速く、確実に。
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-3xl border border-[color:var(--gold)]/30 bg-white/90 p-6 shadow-sm hover:shadow transition"
          >
            <h3 className="text-xl font-bold text-[var(--burgundy)]">{it.title}</h3>
            <p className="mt-2 text-zinc-700">{it.body}</p>
            <ul className="mt-4 space-y-1 text-sm text-[var(--plum)]">
              {it.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]/80" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
