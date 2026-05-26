async function getPrograms() {
  const res = await fetch(
    "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='program']{_id,title,description,'imageUrl':image.asset->url}"
  );

  const data = await res.json();
  return data.result;
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

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
        <h1 style={{ fontSize: "54px", marginBottom: "10px" }}>
          Transformational Programs
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
          Explore curated programs designed to help women grow emotionally,
          spiritually, and professionally through guided transformation.
        </p>
      </section>

      {/* PROGRAM GRID */}
      <div
        style={{
          padding: "30px 40px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {programs?.length > 0 ? (
          programs.map((program: any) => (
            <div
              key={program._id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                transition: "0.3s",
              }}
            >
              {program.imageUrl && (
                <img
                  src={program.imageUrl}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "22px" }}>
                <h2 style={{ marginBottom: "10px" }}>
                  {program.title}
                </h2>

                <p style={{ color: "#666", lineHeight: 1.7 }}>
                  {program.description}
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
                  Enroll Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No programs available yet.
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