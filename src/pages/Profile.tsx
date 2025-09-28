export default function Profile() {
  const basics = [
    { label: "氏名", value: "福元 愛（ふくもと あい）" },
    { label: "生年月日", value: "昭和49年5月2日" },
    { label: "当選回数", value: "2回" },
    { label: "会派名", value: "共創かしわ" },
    { label: "党派名", value: "無所属" },
    { label: "郵便番号", value: "277-0884" },
    { label: "住所", value: "柏市みどり台" },
    { label: "電話番号", value: "080-8858-6494" },
    { label: "メール", value: "fukumoto.ai.kashiwa@gmail.com" },
  ];

  const career = [
    { year: "1974", text: "柏市に生まれる" },
    { year: "1997", text: "大学卒業後、民間企業に勤務" },
    { year: "2017", text: "地域活動を経て柏市議会議員に初当選" },
    { year: "2021", text: "2期目当選、子育て・教育、防災を中心に活動" },
  ];

  return (
    <section className="space-y-8">
      {/* プロフィールヘッダー */}
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--gold)]/10 via-white to-[color:var(--gold)]/10" />
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="shrink-0">
            <div className="h-28 w-28 md:h-32 md:w-32 rounded-2xl ring-4 ring-white overflow-hidden shadow">
              <img src="/ai-image.webp" alt="福元 愛" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#ff1493]">
              プロフィール
            </h2>
            <p className="mt-2 text-zinc-700">
              柏市議会で、暮らしに直結する課題の解決に取り組んでいます。現場の声を丁寧に受け止め、実行力で前に進めます。
            </p>
          </div>
        </div>
      </div>

      {/* 基本情報 */}
      <div className="rounded-3xl border border-black/10 bg-white p-6">
        <h3 className="text-lg font-bold text-[var(--plum)]">基本情報</h3>
        <dl className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {basics.map((row) => (
            <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline">
              <dt className="w-32 shrink-0 text-sm font-semibold text-zinc-600">
                {row.label}
              </dt>
              <dd className="mt-1 sm:mt-0">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 略歴 */}
      <div className="rounded-3xl border border-black/10 bg-white p-6">
        <h3 className="text-lg font-bold text-[var(--plum)]">略歴</h3>
        <ol className="relative mt-6 border-l border-[color:var(--gold)]/50 space-y-6">
          {career.map((c, i) => (
            <li key={i} className="ml-4">
              <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full bg-[#ff1493]" />
              <time className="block text-sm font-semibold text-zinc-500">{c.year}</time>
              <p className="mt-1 text-zinc-700">{c.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

