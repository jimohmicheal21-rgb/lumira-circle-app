import { client } from '../lib/sanity'
import { urlFor } from '../lib/image'

async function getData() {
  return client.fetch(`*[_type == "ranRandom"] | order(_createdAt desc)`)
}

export default async function Home() {
  const data = await getData()

  return (
    <div style={styles.container}>
      
      <h1 style={styles.title}>🚀 Lumira Connected to Sanity</h1>

      {data.length === 0 ? (
        <p>No data yet. Go to Sanity and add content.</p>
      ) : (
        <div style={styles.grid}>
          {data.map((item: any) => (
            <div key={item._id} style={styles.card}>

              {/* IMAGE FIX (IMPORTANT) */}
              {item.image && item.image.asset && (
                <img
                  src={urlFor(item.image).url()}
                  alt={item.title || "image"}
                  style={styles.image}
                />
              )}

              <h2 style={styles.cardTitle}>{item.title}</h2>
              <p style={styles.cardText}>{item.description}</p>

            </div>
          ))}
        </div>
      )}

    </div>
  )
}

const styles: any = {
  container: {
    padding: '40px',
    fontFamily: 'Arial',
    background: '#f5f7fb',
    minHeight: '100vh'
  },

  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },

  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '14px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },

  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '10px'import Image from "next/image";
import Link from "next/link";
import { client } from "../sanity/lib/client";

const POSTS_QUERY = `*[_type == "ranRandom"] | order(_createdAt desc){
  _id,
  title,
  description,
  _createdAt
}`;

interface Post {
  _id: string;
  title: string;
  description: string;
  _createdAt: string;
}

export default async function Home() {
  let posts: Post[] = [];

  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (err) {
    console.error("Sanity fetch error:", err);
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg"
              alt="Lumera Logo"
              width={36}
              height={36}
            />
            <span className="font-bold text-lg">Lumera</span>
          </Link>

          {/* LINKS */}
          <div className="flex gap-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/meet-gurus">Meet Gurus</Link>
            <Link href="/careers">Careers</Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-b from-indigo-50">
        <h1 className="text-5xl font-bold">Lumera Dashboard</h1>
        <p className="text-gray-600 mt-3">
          Live content powered by Sanity CMS + Next.js
        </p>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 pb-20">

        {posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <p className="text-xs text-indigo-500">
                  {new Date(post._createdAt).toDateString()}
                </p>

                <h2 className="text-xl font-bold mt-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {post.description}
                </p>
              </div>
            ))}

          </div>
        ) : (
          <p className="text-center text-gray-500">
            No posts yet. Add content in Sanity.
          </p>
        )}

      </main>

    </div>
  );
}
  },

  cardTitle: {
    fontSize: '18px',
    marginBottom: '10px'
  },

  cardText: {
    color: '#555'
  }
}