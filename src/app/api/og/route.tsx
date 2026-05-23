import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "TRAVEL by WebbingHUB";
    const description =
      searchParams.get("description") ||
      "Websites & Digital Tools for Travel Agencies and Hotels";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #2e5239 0%, #1a3a22 50%, #0f2416 100%)",
            padding: "40px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #d4af37 0%, transparent 50%)",
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              zIndex: 10,
              maxWidth: "90%",
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                fontSize: "48px",
                fontWeight: "300",
                color: "#f7f3ee",
                marginBottom: "30px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Webbing<span style={{ color: "#d4af37" }}>HUB</span>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: "56px",
                fontWeight: "300",
                color: "#f7f3ee",
                marginBottom: "20px",
                lineHeight: "1.3",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: "28px",
                color: "#d4af37",
                marginBottom: "40px",
                fontWeight: "300",
                letterSpacing: "0.08em",
                maxWidth: "800px",
              }}
            >
              {description}
            </div>

            {/* Bottom accent */}
            <div
              style={{
                width: "100px",
                height: "2px",
                background: "#d4af37",
              }}
            />
          </div>

          {/* Bottom branding */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              fontSize: "18px",
              color: "#d4af37",
              fontWeight: "300",
              letterSpacing: "0.1em",
            }}
          >
            travel.webbinghub.io
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
