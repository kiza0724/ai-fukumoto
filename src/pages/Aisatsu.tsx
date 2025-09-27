export default function Aisatsu() {
  return (
    <section className="space-y-10">
      {/* あいさつ文 */}
      <div className="rounded-3xl border border-black/10 p-6 md:p-8 bg-white">
        <h2 className="text-3xl font-black tracking-tight text-[#ff1493]">ごあいさつ</h2>
        <p className="mt-4 leading-relaxed text-zinc-800">
          こんにちは、柏市議会議員の<strong>福元 愛（ふくもと あい）</strong>です。
          暮らしに直結する課題を「現場の声」から解きほぐし、子育て・教育、防災、地域経済の底上げに取り組みます。
          市民の皆さまと共に、持続可能で安心できる柏をつくっていきます。
        </p>
        <p className="mt-3 text-zinc-700">
          これからも、わかりやすい情報発信と説明責任を大切に、誠実に働いてまいります。どうぞよろしくお願いいたします。
        </p>
      </div>

      {/* 写真4枚 */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="rounded-2xl overflow-hidden shadow">
          <img src="/photo1.jpg" alt="活動写真1" className="w-full h-48 object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow">
          <img src="/photo2.jpg" alt="活動写真2" className="w-full h-48 object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow">
          <img src="/photo3.jpg" alt="活動写真3" className="w-full h-48 object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow">
          <img src="/photo4.jpg" alt="活動写真4" className="w-full h-48 object-cover" />
        </div>
      </div>
    </section>
  );
}

