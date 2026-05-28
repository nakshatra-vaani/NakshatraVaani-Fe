import React from "react";
import { notFound } from "next/navigation";
import { TopAppBar } from "@/components/ui/TopAppBar";
import { BottomNavBar } from "@/components/ui/BottomNavBar";
import { Sparkles } from "lucide-react";

type InsightCard = {
  icon: string;
  tag?: string;
  title: string;
  description: string;
  layout?: "card" | "wide";
};

type ReportData = {
  title: string;
  compatibility: string;
  element: string;
  summary: string;
  insights: InsightCard[];
};

const reports: Record<string, ReportData> = {
  "marriage-report": {
    title: "Marital Bliss Alignment",
    compatibility: "94.8%",
    element: "Aether",
    summary:
      "Your union is whispered in the silent orbits of Jupiter and Venus. As the tides of destiny pull you closer, the cosmic resonance suggests a dance of two souls carved from the same stardust, destined for a harmony that transcends the material plane.",
    insights: [
      {
        icon: "≋",
        tag: "MERCURY DOMINANT",
        title: "Communication Harmony",
        description:
          "The alignment of your Mercury positions facilitates a fluid exchange of thoughts. Words are not just sounds, but bridges between your inner worlds.",
        layout: "card",
      },
      {
        icon: "🧘",
        title: "Spiritual Resonance",
        description:
          "Your 12th houses mirror each other, indicating a deep, unspoken spiritual contract signed before this incarnation.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Karmic Timing",
        description:
          "The current Saturn transit marks a significant milestone in your relationship. This is the era of solidification and building a legacy that will stand the test of temporal shifts.",
        layout: "wide",
      },
    ],
  },

  "educational-report": {
    title: "Educational Destiny",
    compatibility: "88.2%",
    element: "Air",
    summary:
      "Mercury's radiant influence guides your intellectual journey, opening corridors of knowledge that align with your soul's deepest yearning for wisdom and understanding.",
    insights: [
      {
        icon: "✦",
        tag: "MERCURY DOMINANT",
        title: "Intellectual Alignment",
        description:
          "Your Mercury placement creates a natural affinity for absorbing and synthesizing complex ideas, gifting you with the ability to learn across disciplines.",
        layout: "card",
      },
      {
        icon: "🌙",
        title: "Intuitive Learning",
        description:
          "The Moon's position enhances your emotional intelligence, allowing you to understand subjects on a deeply intuitive level beyond mere logic.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Optimal Timing",
        description:
          "Jupiter's transit through your 9th house signals an era of profound academic breakthroughs and the discovery of your true intellectual calling.",
        layout: "wide",
      },
    ],
  },

  "career-wealth-report": {
    title: "Career & Wealth Alignment",
    compatibility: "91.4%",
    element: "Earth",
    summary:
      "Saturn's resolute energy sculpts your path to professional excellence. The cosmic arrangement favors those who combine discipline with visionary thinking, and your chart is uniquely positioned for lasting material success.",
    insights: [
      {
        icon: "♄",
        tag: "SATURN DOMINANT",
        title: "Authority & Structure",
        description:
          "Saturn's placement in your 10th house draws you toward positions of leadership and lasting institutional impact.",
        layout: "card",
      },
      {
        icon: "💫",
        title: "Abundance Portal",
        description:
          "Venus conjunct Jupiter in your 2nd house opens a powerful channel for wealth accumulation through creative and collaborative endeavors.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Power Window",
        description:
          "The next 18 months represent a rare convergence of planetary support for career elevation. Decisive action now echoes through decades.",
        layout: "wide",
      },
    ],
  },

  "health-report": {
    title: "Health Resonance",
    compatibility: "86.7%",
    element: "Water",
    summary:
      "The waters of cosmic healing flow through your chart, revealing a deep connection between your physical vessel and the celestial rhythms that govern vitality and renewal.",
    insights: [
      {
        icon: "♆",
        tag: "NEPTUNE DOMINANT",
        title: "Healing Currents",
        description:
          "Neptune's influence heightens your sensitivity to energy, making practices like meditation, yoga, and energy healing especially powerful for you.",
        layout: "card",
      },
      {
        icon: "🌊",
        title: "Emotional Vitality",
        description:
          "Your emotional body is deeply connected to your physical health. Cultivating inner peace has measurable effects on your physical wellbeing.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Renewal Cycle",
        description:
          "The current lunar phase supports deep cellular regeneration. Honor rest cycles as sacred — they are when your body integrates cosmic downloads.",
        layout: "wide",
      },
    ],
  },

  "overall-life-report": {
    title: "Overall Life Blueprint",
    compatibility: "96.1%",
    element: "Cosmos",
    summary:
      "Your birth chart is a cosmic mandala of extraordinary complexity and beauty. The convergence of your natal planets paints a portrait of a soul destined for profound transformation, impact, and liberation across multiple dimensions of existence.",
    insights: [
      {
        icon: "☉",
        tag: "SUN DOMINANT",
        title: "Core Life Purpose",
        description:
          "Your Sun's placement reveals a soul called to illuminate others, leading through authentic self-expression and radiant creative force.",
        layout: "card",
      },
      {
        icon: "♇",
        title: "Transformative Power",
        description:
          "Pluto's aspects in your chart indicate you carry the seeds of deep transformation — both for yourself and for those in your sphere of influence.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Destiny Activation",
        description:
          "Your North Node is activated by current transits, signaling that you are precisely on schedule with your soul's overarching mission and trajectory.",
        layout: "wide",
      },
    ],
  },

  "loyalty-report": {
    title: "Loyalty Alignment",
    compatibility: "89.9%",
    element: "Moon",
    summary:
      "The Moon weaves threads of deep emotional devotion through your relational chart, creating bonds of loyalty that transcend circumstance and are rooted in soul-level commitment.",
    insights: [
      {
        icon: "☽",
        tag: "MOON DOMINANT",
        title: "Emotional Covenant",
        description:
          "Your Moon's placement creates an almost psychic emotional bond, enabling an instinctive understanding of each other's unspoken needs and desires.",
        layout: "card",
      },
      {
        icon: "⚖",
        title: "Sacred Trust",
        description:
          "Venus in harmonious aspect to Saturn in your composite chart builds a foundation of trust that deepens over time rather than eroding.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Bonding Cycles",
        description:
          "Current lunar transits are weaving new layers of emotional depth into your connection, inviting vulnerability as a pathway to greater intimacy.",
        layout: "wide",
      },
    ],
  },

  "divine-soul-partner": {
    title: "Divine Soul Partner",
    compatibility: "98.4%",
    element: "Eternal",
    summary:
      "Rare is the connection that bears the unmistakable signature of cosmic design. Your synastry chart reveals a soul contract of extraordinary depth — two trajectories drawn together across the fabric of time by forces that defy ordinary explanation.",
    insights: [
      {
        icon: "∞",
        tag: "NORTH NODE ALIGNED",
        title: "Karmic Recognition",
        description:
          "Your North Nodes form a rare conjunction, signaling that this relationship is central to both souls' evolutionary path in this incarnation.",
        layout: "card",
      },
      {
        icon: "✦",
        title: "Twin Flame Resonance",
        description:
          "The mirroring of your Venus–Mars axes creates a magnetic polarity that draws you together with the irresistible force of cosmic gravity.",
        layout: "card",
      },
      {
        icon: "⏱",
        title: "Sacred Convergence",
        description:
          "This lifetime represents the culmination of a multi-incarnational journey. The time of full soul recognition and union is cosmically imminent.",
        layout: "wide",
      },
    ],
  },
};

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const report = reports[slug];

  if (!report) {
    notFound();
  }

  const gridCards = report.insights.filter(
    (card) => card.layout !== "wide"
  );

  const wideCards = report.insights.filter(
    (card) => card.layout === "wide"
  );

  return (
    <main
      className="min-h-screen relative flex justify-center overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Cosmic Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(201,168,83,0.08) 0%, transparent 25%),
            radial-gradient(circle at 85% 70%, rgba(125,90,40,0.12) 0%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 40%),
            #07070C
          `,
        }}
      />

      {/* Nebula Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(80,50,120,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(40,60,100,0.2) 0%, transparent 50%)",
        }}
      />

      {/* Planet Glow */}
      <div
        className="fixed z-0 pointer-events-none"
        style={{
          right: "-18vw",
          top: "8vh",
          width: "60vw",
          height: "90vh",
          borderRadius: "999px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(201,168,83,0.18), rgba(0,0,0,0.95) 65%)",
          boxShadow: "0 0 120px rgba(201,168,83,0.12)",
          filter: "blur(6px)",
        }}
      />

      {/* Top App Bar */}
      <TopAppBar />

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col w-full"
        style={{
          width: "100%",
          maxWidth: "1100px",
          paddingTop: "110px",
          paddingBottom: "140px",
          paddingLeft: "24px",
          paddingRight: "24px",
          gap: "32px",
        }}
      >
        {/* Title */}
        <div
          className="flex flex-col items-center"
          style={{ gap: "12px" }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "34px",
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "0.04em",
              textAlign: "center",
            }}
          >
            {report.title}
          </h1>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#C9A853",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Orb */}
        <div className="flex justify-center">
          <div
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "999px",
              border: "1px solid rgba(201,168,83,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "78%",
                height: "78%",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle at 35% 35%, rgba(232,162,42,1) 0%, rgba(180,110,20,0.85) 22%, rgba(10,10,12,1) 70%)",
                boxShadow:
                  "0 0 80px rgba(201,168,83,0.35), inset 0 0 50px rgba(0,0,0,0.7)",
              }}
            />
          </div>
        </div>

        {/* Summary + Stats */}
        <div
          className="grid md:grid-cols-[1fr_180px]"
          style={{ gap: "40px" }}
        >
          <div>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A853",
                marginBottom: "18px",
              }}
            >
              Celestial Union Summary
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.82)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              "{report.summary}"
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "6px",
                }}
              >
                Compatibility
              </p>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "34px",
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                {report.compatibility}
              </h3>
            </div>

            <div>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "6px",
                }}
              >
                Element
              </p>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "34px",
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                {report.element}
              </h3>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {/* Grid Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {gridCards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(28,25,20,0.72)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  padding: "28px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="flex items-start justify-between"
                  style={{ marginBottom: "18px" }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    {card.icon}
                  </div>

                  {card.tag && (
                    <div
                      style={{
                        padding: "6px 14px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {card.tag}
                    </div>
                  )}
                </div>

                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "32px",
                    color: "#fff",
                    marginBottom: "14px",
                    fontWeight: 400,
                  }}
                >
                  {card.title}
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    lineHeight: "1.9",
                    fontSize: "16px",
                    fontWeight: 300,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Wide Cards */}
          {wideCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: "rgba(28,25,20,0.72)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "28px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex gap-5 items-start">
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>

                <div>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "34px",
                      color: "#fff",
                      marginBottom: "14px",
                      fontWeight: 400,
                    }}
                  >
                    {card.title}
                  </h2>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.68)",
                      lineHeight: "1.9",
                      fontSize: "16px",
                      fontWeight: 300,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <button
            style={{
              background: "#E8D9B5",
              color: "#1b1408",
              border: "none",
              borderRadius: "16px",
              padding: "20px 40px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              cursor: "pointer",
              minWidth: "320px",
              boxShadow: "0 12px 40px rgba(201,168,83,0.16)",
            }}
          >
            Download Full Blueprint ↓
          </button>
        </div>
      </div>

      {/* AI Floating Button */}
      <button
        className="fixed z-50 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{
          bottom: "100px",
          right: "40px",
          width: "60px",
          height: "60px",
          background:
            "linear-gradient(135deg, #e1c296 0%, #c9913a 100%)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0px 8px 32px rgba(201, 145, 58, 0.4)",
        }}
        aria-label="Open Chatbot"
      >
        <Sparkles size={28} color="#131315" strokeWidth={2.5} />
      </button>

      {/* Bottom Nav */}
      <BottomNavBar />
    </main>
  );
}