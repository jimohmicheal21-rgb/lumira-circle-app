async function getCoaches() {
  const res = await fetch(
    "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='coach']{_id,name,role,biography,'imageUrl':image.asset->url}"
  );

  const data = await res.json();
  return data.result;
}

export default async function BecomeCoachPage() {
  const coaches = await getCoaches();

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
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://cdn.sanity.io/images/se4f92gk/production/e721da04619811c3cd756185877f3f55ec4c2512-415x514.svg"
            style={{ width: "42px", height: "42px" }}
          />
          <h2 style={{ margin: 0 }}>Lumira</h2>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/programs" style={styles.link}>Programs</a>
          <a href="/gurus" style={styles.link}>Gurus</a>
          <a href="/careers" style={styles.link}>Careers</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 30px", textAlign: "center" }}>
        <h1 style={{ fontSize: "52px", marginBottom: "15px" }}>
          Become a Lumira Coach
        </h1>

        <p style={{ maxWidth: "750px", margin: "auto", color: "#666", fontSize: "18px" }}>
          Join our elite circle of transformation coaches guiding women through
          healing, growth, and purpose-driven living.
        </p>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "0 40px 60px",
        }}
      >
        {[
          "Global Visibility",
          "Monetize Your Skills",
          "Premium Coaching Platform",
          "Community Support",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              fontWeight: "bold",
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* COACH LIST (from CMS) */}
      <div
        style={{
          padding: "20px 40px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {coaches?.length > 0 ? (
          coaches.map((coach: any) => (
            <div
              key={coach._id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {coach.imageUrl && (
                <img
                  src={coach.imageUrl}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "22px" }}>
                <h2>{coach.name}</h2>
                <h4 style={{ color: "#777", marginTop: "-5px" }}>
                  {coach.role}
                </h4>

                <p style={{ color: "#666", lineHeight: 1.7 }}>
                  {coach.biography}
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
                  Apply as Coach
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No coaches available yet.
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