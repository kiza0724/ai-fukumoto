// /src/data/columns.ts
export type Column = {
  id: string;            // URL用（英数字と-推奨）
  title: string;
  date: string;          // "2025-09-28" 形式
  tags?: string[];
  eyecatch?: string;     // /columns/xxx.jpg など public 配下
  body: string;          // 段落は \n\n で区切り
};

export const columns: Column[] = [
  {
    id: "greeting-2025",
    title: "9月の活動ダイジェスト",
    date: "2025-09-28",
    tags: ["活動報告", "地域"],
    eyecatch: "/columns/sample.jpg",
    body: [
      "今月は子育て・教育、防災、地域経済の3本柱で動きました。",
      "学童の受け皿拡大に向けたヒアリングを重ね、具体の増設候補を整理。避難所運営の改善提案も前進しています。",
      "商店支援では小規模事業のデジタル化相談を継続。来月は成果を数字でまとめて共有します。"
    ].join("\n\n"),
  },
  // ここに追記していく ↓
  {
  id: "unique-id-2025-10-01",
  title: "タイトル",
  date: "2025-10-01",
  tags: ["タグ1","タグ2"],
  eyecatch: "/columns/your-image.jpg",
  body: [
    "1段落めの本文。",
    "2段落め。空行で段落区切りできます。",
  ].join("\n\n"),
}

];

export function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}
