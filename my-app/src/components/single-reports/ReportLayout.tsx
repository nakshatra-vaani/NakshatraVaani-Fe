"use client";

import { ReportData } from "@/lib/reports/report-types";

interface Props {
  report: ReportData;
}

export default function ReportLayout({
  report,
}: Props) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        paddingBottom: "120px",
      }}
    >
      {/* HERO */}
      <section
        style={{
          paddingTop: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            letterSpacing: "0.25em",
            color: "#E7C98A",
          }}
        >
          THE ORACLE
        </h1>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <img
            src={report.heroImage}
            alt={report.title}
            style={{
              width: "300px",
              margin: "0 auto",
              borderRadius: "999px",
            }}
          />
        </div>

        <h2
          style={{
            marginTop: "36px",
            fontSize: "42px",
            fontFamily: "serif",
          }}
        >
          {report.title}
        </h2>
      </section>

      {/* SUMMARY */}
      <section
        style={{
          maxWidth: "800px",
          margin: "80px auto 0",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#E7C98A",
            letterSpacing: "0.3em",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          {report.subtitle}
        </p>

        <p
          style={{
            marginTop: "32px",
            fontSize: "28px",
            lineHeight: 1.7,
            color: "#D1D5DB",
            fontFamily: "serif",
            fontStyle: "italic",
          }}
        >
          "{report.summary}"
        </p>
      </section>

      {/* METRICS */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "120px",
          marginTop: "64px",
        }}
      >
        <div>
          <p style={{ color: "#6B7280" }}>
            COMPATIBILITY
          </p>

          <h3
            style={{
              marginTop: "12px",
              fontSize: "28px",
            }}
          >
            {report.compatibility}
          </h3>
        </div>

        <div>
          <p style={{ color: "#6B7280" }}>
            ELEMENT
          </p>

          <h3
            style={{
              marginTop: "12px",
              fontSize: "28px",
            }}
          >
            {report.element}
          </h3>
        </div>
      </section>

      {/* INSIGHTS */}
      <section
        style={{
          maxWidth: "900px",
          margin: "80px auto 0",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {report.insights.map((insight) => (
          <div
            key={insight.id}
            style={{
              borderRadius: "32px",
              border:
                "1px solid rgba(255,255,255,0.08)",

              background:
                "linear-gradient(to right, rgba(20,20,30,0.95), rgba(35,35,50,0.7))",

              padding: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "34px",
                  fontFamily: "serif",
                }}
              >
                {insight.title}
              </h3>

              {insight.tag && (
                <div
                  style={{
                    padding:
                      "12px 20px",
                    borderRadius:
                      "999px",

                    background:
                      "rgba(255,255,255,0.08)",

                    fontSize: "12px",
                  }}
                >
                  {insight.tag}
                </div>
              )}
            </div>

            <p
              style={{
                marginTop: "24px",
                color: "#D1D5DB",
                fontSize: "22px",
                lineHeight: 1.8,
              }}
            >
              {insight.description}
            </p>
          </div>
        ))}
      </section>

      {/* DOWNLOAD */}
      <section
        style={{
          maxWidth: "900px",
          margin: "64px auto 0",
          padding: "0 24px",
        }}
      >
        <button
          style={{
            width: "100%",
            height: "90px",
            borderRadius: "24px",
            border: "none",

            background: "#E5C896",

            color: "#1A2238",

            fontSize: "20px",
            letterSpacing: "0.3em",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          DOWNLOAD FULL BLUEPRINT
        </button>
      </section>
    </main>
  );
}