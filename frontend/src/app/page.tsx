type Cat = {
  id: number;
  name: string;
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cats`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch cats");
  }

  const cats: Cat[] = await res.json();

  return (
    <main style={{ padding: 40 }}>
      <h1>🐈 Cats in Prod</h1>
      <p>Backend: Render · Frontend: Next.js</p>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </main>
  );
}
