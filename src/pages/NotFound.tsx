import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="text-center py-24">
      <h2 className="text-3xl font-black mb-4">ページが見つかりません</h2>
      <p className="text-zinc-600 mb-8">URLをご確認ください。</p>
      <Link to="/" className="underline">TOPへ戻る</Link>
    </section>
  );
}
