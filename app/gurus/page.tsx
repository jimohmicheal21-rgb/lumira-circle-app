async function getGurus() {
  const res = await fetch(
    "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='guru']{_id,name,role,biography,'imageUrl':image.asset->url,featured}"
  );

  const data = await res.json();
  return data.result;
}

export default async function GurusPage() {
  const gurus = await getGurus();

  const featuredGuru = gurus?.find((g: any) => g.featured);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        fontFamily: "Arial",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          background: "white",
          padding: "18px 40px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg"
            style={{ width: "42px", height: "42px" }}
          />
          <h2 style={{ margin: 0 }}>Lumira</h2>
        </div>

        <div style={{ display: "flex", gap: "18px" }}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/programs" style={styles.link}>Programs</a>
          <a href="/gurus" style={styles.link}>Gurus</a>
          <a href="/careers" style={styles.link}>Careers</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 30px 40px",
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>
          Meet the Lumira Gurus
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            color: "#666",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Visionary coaches and transformation guides helping women step into
          clarity, healing, confidence, and purpose.
        </p>
      </section>

      {/* FEATURED GURU */}
      {featuredGuru && (
        <section
          style={{
            margin: "0 40px 50px",
            background: "white",
            borderRadius: "25px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={featuredGuru.imageUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              minHeight: "350px",
            }}
          />

          <div style={{ padding: "40px" }}>
            <h3 style={{ color: "#999", marginBottom: "10px" }}>
              Featured Guru
            </h3>

            <h2 style={{ fontSize: "34px", marginBottom: "10px" }}>
              {featuredGuru.name}
            </h2>

            <h4 style={{ color: "#666", marginBottom: "20px" }}>
              {featuredGuru.role}
            </h4>

            <p style={{ color: "#555", lineHeight: 1.8 }}>
              {featuredGuru.biography}
            </p>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 18px",
                background: "#111",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Book Session
            </button>
          </div>
        </section>
      )}

      {/* GURUS GRID */}
      <div
        style={{
          padding: "20px 40px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {gurus?.length > 0 ? (
          gurus.map((guru: any) => (
            <div
              key={guru._id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {guru.imageUrl && (
                <img
                  src={guru.imageUrl}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "22px" }}>
                <h2>{guru.name}</h2>

                <h4 style={{ color: "#777", marginTop: "-5px" }}>
                  {guru.role}
                </h4>

                <p style={{ color: "#666", lineHeight: 1.7 }}>
                  {guru.biography}
                </p>

                <button
                  style={{
                    marginTop: "15px",
                    padding: "12px 18px",
                    background: "#111",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No gurus available yet.
          </p>
        )}
      </div>
    </div>
  );
}

const styles: any = {
  link: {
    textDecoration: "none",
    color: "#444",
    fontWeight: "bold",
  },
};