// src/pages/Sns.tsx
export default function Sns() {
  const sns: { name: string; url: string; icon?: string }[] = [
    { name: "Ameba Blog", url: "https://ameblo.jp/ai-fukumoto/" }, 
    { name: "YouTube", url: "https://www.youtube.com/", icon: "/youtube_social_icon_red.png" },
    { name: "Instagram", url: "https://www.instagram.com/fukumoto__ai/?hl=ja", icon: "/Instagram_Glyph_Gradient.svg" },
  ];

  return (
    <section>
      <h2 className="mb-6 text-2xl md:text-3xl font-black text-[#ff1493]">SNS</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {sns.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl border border-[color:var(--gold)]/50 bg-white p-5 text-lg font-semibold text-[var(--plum)] shadow-sm hover:-translate-y-0.5 hover:shadow transition"
          >
            {s.icon && <img src={s.icon} alt={s.name} className="h-7 w-7 object-contain" />}
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
