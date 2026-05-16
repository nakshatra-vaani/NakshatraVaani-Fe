import { notFound } from "next/navigation";

type InsightCard = {
  icon: string;
  tag?: string;
  title: string;
  description: string;
};

type ReportData = {
  title: string;
  subtitle: string;
  compatibility: string;
  element: string;
  summary: string;
  insights: InsightCard[];
};

const reports: Record<string, ReportData> = {
  "marriage-report": {
    title: "Marital Bliss Alignment",
    subtitle: "Your union is whispered in the silent orbits of Jupiter and Venus.",
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
      },
      {
        icon: "🧘",
        title: "Spiritual Resonance",
        description:
          "Your 12th houses mirror each other, indicating a deep, unspoken spiritual contract signed before this incarnation.",
      },
      {
        icon: "⏱",
        title: "Karmic Timing",
        description:
          "The current Saturn transit marks a significant milestone in your relationship. This is the era of solidification and building a legacy that will stand the test of temporal shifts.",
      },
    ],
  },

  "educational-report": {
    title: "Educational Destiny",
    subtitle: "Mercury illuminates your path toward intellectual mastery.",
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
      },
      {
        icon: "🌙",
        title: "Intuitive Learning",
        description:
          "The Moon's position enhances your emotional intelligence, allowing you to understand subjects on a deeply intuitive level beyond mere logic.",
      },
      {
        icon: "⏱",
        title: "Optimal Timing",
        description:
          "Jupiter's transit through your 9th house signals an era of profound academic breakthroughs and the discovery of your true intellectual calling.",
      },
    ],
  },

  "career-wealth-report": {
    title: "Career & Wealth Alignment",
    subtitle: "Saturn's discipline opens the gates to abundance and authority.",
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
      },
      {
        icon: "💫",
        title: "Abundance Portal",
        description:
          "Venus conjunct Jupiter in your 2nd house opens a powerful channel for wealth accumulation through creative and collaborative endeavors.",
      },
      {
        icon: "⏱",
        title: "Power Window",
        description:
          "The next 18 months represent a rare convergence of planetary support for career elevation. Decisive action now echoes through decades.",
      },
    ],
  },

  "health-report": {
    title: "Health Resonance",
    subtitle: "Your cosmic energies indicate strong spiritual vitality.",
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
      },
      {
        icon: "🌊",
        title: "Emotional Vitality",
        description:
          "Your emotional body is deeply connected to your physical health. Cultivating inner peace has measurable effects on your physical wellbeing.",
      },
      {
        icon: "⏱",
        title: "Renewal Cycle",
        description:
          "The current lunar phase supports deep cellular regeneration. Honor rest cycles as sacred — they are when your body integrates cosmic downloads.",
      },
    ],
  },

  "overall-life-report": {
    title: "Overall Life Blueprint",
    subtitle: "The stars reveal a path of transformation and liberation.",
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
      },
      {
        icon: "♇",
        title: "Transformative Power",
        description:
          "Pluto's aspects in your chart indicate you carry the seeds of deep transformation — both for yourself and for those in your sphere of influence.",
      },
      {
        icon: "⏱",
        title: "Destiny Activation",
        description:
          "Your North Node is activated by current transits, signaling that you are precisely on schedule with your soul's overarching mission and trajectory.",
      },
    ],
  },

  "loyalty-report": {
    title: "Loyalty Alignment",
    subtitle: "Trust and devotion are strengthened through lunar harmony.",
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
      },
      {
        icon: "⚖",
        title: "Sacred Trust",
        description:
          "Venus in harmonious aspect to Saturn in your composite chart builds a foundation of trust that deepens over time rather than eroding.",
      },
      {
        icon: "⏱",
        title: "Bonding Cycles",
        description:
          "Current lunar transits are weaving new layers of emotional depth into your connection, inviting vulnerability as a pathway to greater intimacy.",
      },
    ],
  },

  "divine-soul-partner": {
    title: "Divine Soul Partner",
    subtitle: "Your karmic threads are deeply intertwined across lifetimes.",
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
      },
      {
        icon: "✦",
        title: "Twin Flame Resonance",
        description:
          "The mirroring of your Venus–Mars axes creates a magnetic polarity that draws you together with the irresistible force of cosmic gravity.",
      },
      {
        icon: "⏱",
        title: "Sacred Convergence",
        description:
          "This lifetime represents the culmination of a multi-incarnational journey. The time of full soul recognition and union is cosmically imminent.",
      },
    ],
  },
};

// ── Inline CSS (avoids needing Tailwind / external stylesheets) ──────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --gold:        #C9A853;
    --gold-light:  #E2C97E;
    --gold-dim:    #8A6E35;
    --bg-deep:     #06060A;
    --bg-card:     rgba(255,255,255,0.045);
    --bg-card-hov: rgba(255,255,255,0.07);
    --border:      rgba(201,168,83,0.15);
    --text-body:   rgba(255,255,255,0.72);
    --text-dim:    rgba(255,255,255,0.38);
    --tag-bg:      rgba(255,255,255,0.10);
    --tag-border:  rgba(255,255,255,0.18);
    --cream:       #EDE4CE;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--bg-deep);
    color: white;
    min-height: 100vh;
  }

  /* ── Starfield background ── */
  .oracle-bg {
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 50% 0%, rgba(100,70,20,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 60% 80% at 80% 100%, rgba(60,40,10,0.12) 0%, transparent 60%),
      var(--bg-deep);
    overflow: hidden;
    z-index: 0;
  }
  .oracle-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 15% 20%, rgba(255,255,255,0.55) 0%, transparent 100%),
      radial-gradient(1px 1px at 42% 68%, rgba(255,255,255,0.40) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 70% 15%, rgba(255,255,255,0.50) 0%, transparent 100%),
      radial-gradient(1px 1px at 88% 42%, rgba(255,255,255,0.35) 0%, transparent 100%),
      radial-gradient(1px 1px at 25% 85%, rgba(255,255,255,0.45) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 90%, rgba(255,255,255,0.30) 0%, transparent 100%),
      radial-gradient(1px 1px at 5%  55%, rgba(255,255,255,0.40) 0%, transparent 100%),
      radial-gradient(1px 1px at 95% 75%, rgba(255,255,255,0.35) 0%, transparent 100%);
  }

  /* ── Layout ── */
  .page-wrapper {
    position: relative;
    z-index: 1;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 0 80px;
  }

  /* ── Header bar ── */
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
  }
  .header-menu {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }
  .header-menu span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: rgba(255,255,255,0.7);
  }
  .header-title {
    font-family: 'Jost', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.3em;
    color: var(--gold);
    text-transform: uppercase;
  }
  .header-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1.5px solid var(--gold-dim);
    background: rgba(201,168,83,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  /* ── Orb visual ── */
  .orb-section {
    display: flex;
    justify-content: center;
    padding: 8px 20px 32px;
  }
  .orb-outer {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,83,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .orb-outer::before {
    content: '•';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--gold);
    font-size: 8px;
  }
  .orb-outer::after {
    content: '•';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--gold);
    font-size: 8px;
  }
  .orb-inner {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 38% 40%, rgba(220,160,40,0.9) 0%, rgba(180,110,20,0.7) 25%, rgba(30,20,10,0.95) 65%, #0a0a14 100%);
    box-shadow:
      0 0 60px rgba(201,168,83,0.25),
      0 0 120px rgba(201,168,83,0.10),
      inset 0 0 30px rgba(0,0,0,0.6);
    position: relative;
    overflow: hidden;
    animation: orbPulse 4s ease-in-out infinite;
  }
  .orb-inner::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      conic-gradient(from 200deg at 40% 45%, transparent 0deg, rgba(100,180,200,0.35) 60deg, transparent 120deg),
      conic-gradient(from 20deg at 60% 55%, transparent 0deg, rgba(220,160,40,0.40) 80deg, transparent 160deg);
    animation: orbSpin 8s linear infinite;
  }
  .orb-inner::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 20%;
    width: 30%;
    height: 30%;
    background: radial-gradient(circle, rgba(255,220,120,0.6) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(8px);
  }
  @keyframes orbPulse {
    0%, 100% { box-shadow: 0 0 60px rgba(201,168,83,0.25), 0 0 120px rgba(201,168,83,0.10), inset 0 0 30px rgba(0,0,0,0.6); }
    50%       { box-shadow: 0 0 80px rgba(201,168,83,0.35), 0 0 150px rgba(201,168,83,0.15), inset 0 0 30px rgba(0,0,0,0.6); }
  }
  @keyframes orbSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* ── Report title ── */
  .report-title {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: white;
    padding: 0 24px;
    margin-bottom: 28px;
  }

  /* ── Gold divider ── */
  .gold-divider {
    width: 48px;
    height: 1px;
    background: var(--gold);
    margin: 14px auto 28px;
    opacity: 0.7;
  }

  /* ── Summary section ── */
  .summary-section {
    padding: 0 24px 32px;
  }
  .section-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.25em;
    color: var(--gold);
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .summary-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    line-height: 1.75;
    text-align: center;
    color: rgba(255,255,255,0.85);
  }

  /* ── Stats row ── */
  .stats-row {
    display: flex;
    gap: 1px;
    margin: 0 20px 28px;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: var(--border);
  }
  .stat-cell {
    flex: 1;
    background: var(--bg-card);
    padding: 18px 16px;
  }
  .stat-label {
    font-size: 9px;
    letter-spacing: 0.2em;
    color: var(--text-dim);
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 300;
    color: white;
    letter-spacing: 0.02em;
  }

  /* ── Insight cards ── */
  .cards-section {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  }
  .insight-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 22px 20px;
    transition: background 0.2s;
  }
  .insight-card:hover { background: var(--bg-card-hov); }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 14px;
  }
  .card-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgba(255,255,255,0.7);
    border: 1px solid rgba(255,255,255,0.10);
  }
  .card-tag {
    background: var(--tag-bg);
    border: 1px solid var(--tag-border);
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 9px;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.65);
    text-transform: uppercase;
    font-weight: 500;
  }

  .card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 400;
    color: white;
    margin-bottom: 10px;
    letter-spacing: 0.01em;
  }
  .card-desc {
    font-size: 14px;
    line-height: 1.65;
    color: var(--text-body);
    font-weight: 300;
  }

  /* ── Pagination ── */
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 28px;
  }
  .page-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  }
  .page-btn:hover { background: rgba(255,255,255,0.12); }
  .page-count {
    font-size: 13px;
    color: var(--text-dim);
    letter-spacing: 0.05em;
  }

  /* ── CTA ── */
  .cta-section {
    padding: 0 16px;
  }
  .cta-btn {
    width: 100%;
    background: var(--cream);
    color: #1a1208;
    border: none;
    border-radius: 14px;
    padding: 20px 24px;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition: opacity 0.2s, transform 0.15s;
  }
  .cta-btn:hover { opacity: 0.92; transform: translateY(-1px); }
  .cta-btn:active { transform: translateY(0); }
  .cta-icon {
    font-size: 16px;
    opacity: 0.7;
  }
`;

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = reports[slug];

  if (!report) notFound();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="oracle-bg" />

      <div className="page-wrapper">

        {/* Orb */}
        <div className="orb-section">
          <div className="orb-outer">
            <div className="orb-inner" />
          </div>
        </div>

        {/* Report Title */}
        <h1 className="report-title">{report.title}</h1>
        <div className="gold-divider" />

        {/* Summary */}
        <div className="summary-section">
          <p className="section-label">Celestial Union Summary</p>
          <p className="summary-text">"{report.summary}"</p>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-cell">
            <p className="stat-label">Compatibility</p>
            <p className="stat-value">{report.compatibility}</p>
          </div>
          <div className="stat-cell">
            <p className="stat-label">Element</p>
            <p className="stat-value">{report.element}</p>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="cards-section">
          {report.insights.map((card, i) => (
            <div className="insight-card" key={i}>
              <div className="card-top">
                <div className="card-icon">{card.icon}</div>
                {card.tag && <div className="card-tag">{card.tag}</div>}
              </div>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-section">
          <button className="cta-btn">
            Download Full Blueprint
            <span className="cta-icon">↓</span>
          </button>
        </div>
      </div>
    </>
  );
}