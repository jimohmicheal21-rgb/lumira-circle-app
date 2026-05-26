async function getCareers() {
  const res = await fetch(
    "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='career']{_id,title,description,'imageUrl':image.asset->url}"
  );

  const data = await res.json();

  return data.result;
}

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
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
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg"
            alt="Lumira Logo"
            style={{
              width: "42px",
              height: "42px",
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              color: "#111",
            }}
          >
            Lumira
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="/" style={styles.link}>Home</a>
          <a href="/programs" style={styles.link}>Programs</a>
          <a href="/gurus" style={styles.link}>Gurus</a>
          <a href="/careers" style={styles.link}>Careers</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: "90px 30px 60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
            color: "#111",
          }}
        >
          Join The Lumira Team
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#666",
          }}
        >
          Help empower women through transformation, education, wellness,
          mentorship, and community.
        </p>
      </section>

      {/* CAREERS GRID */}
      <div
        style={{
          padding: "20px 40px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {careers?.length > 0 ? (
          careers.map((career: any) => (
            <div
              key={career._id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                transition: "0.3s",
              }}
            >
              {career.imageUrl && (
                <img
                  src={career.imageUrl}
                  alt={career.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "24px" }}>
                <h2
                  style={{
                    marginBottom: "12px",
                    color: "#111",
                  }}
                >
                  {career.title}
                </h2>

                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {career.description}
                </p>

                <button
                  style={{
                    background: "#111",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
              padding: "60px 20px",
            }}
          >
            <h2>No career openings yet.</h2>

            <p style={{ color: "#666" }}>
              New opportunities will appear here soon.
            </p>
          </div>
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