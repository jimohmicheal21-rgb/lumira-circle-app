import { client } from '../lib/sanity'

async function getData() {
  return client.fetch(`*[_type == "ranRandom"]`)
}

export default async function Home() {
  const data = await getData()

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 Lumira Connected to Sanity</h1>

      {data.length === 0 ? (
        <p>No data yet. Go to Sanity and add content.</p>
      ) : (
        data.map((item) => (
          <div key={item._id} style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc" }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  )
}