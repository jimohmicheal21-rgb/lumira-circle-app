export const dynamic = "force-dynamic";

async function getPrograms() {
  try {
    const res = await fetch(
      "https://se4f92gk.apicdn.sanity.io/v2024-01-01/data/query/production?query=*[_type=='program']{_id,title,description,'imageUrl':image.asset->url}",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch programs");

    const data = await res.json();
    return data?.result || [];
  } catch (err) {
    console.error("Sanity error:", err);
    return [];
  }
}

import HomeClient from "./HomeClient";

export default async function Page() {
  const programs = await getPrograms();

  return (
    <HomeClient
      programs={programs}
      hero={{
        title: "Transform Your Life With Guided Growth",
        subtitle:
          "Structured programs, expert mentorship, and a supportive community designed to help you grow emotionally, spiritually, and professionally.",
      }}
      sections={{
        features: [
          {
            title: "Personal Transformation",
            desc: "Step-by-step guided programs that help you reset your mindset and habits.",
          },
          {
            title: "Expert Mentorship",
            desc: "Learn directly from experienced coaches and transformation guides.",
          },
          {
            title: "Community Support",
            desc: "Join a powerful network of people growing together.",
          },
        ],

        stats: [
          { label: "Active Members", value: "10,000+" },
          { label: "Programs Completed", value: "25,000+" },
          { label: "Success Rate", value: "92%" },
        ],

        testimonials: [
          {
            name: "Sarah M.",
            text: "This platform completely changed my mindset and direction in life.",
          },
          {
            name: "David K.",
            text: "The programs are structured and easy to follow. Very powerful.",
          },
          {
            name: "Aisha T.",
            text: "I finally feel clarity and purpose after joining Lumira Circle.",
          },
        ],

        cta: {
          title: "Start Your Transformation Today",
          button: "Explore Programs",
        },
      }}
    />
  );
}