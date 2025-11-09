import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const size = { width: 1200, height: 630 };
  
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "black",
          color: "white",
          padding: 64,
          fontSize: 64,
          alignItems: "center",
          justifyContent: "center"
        }}>
        你的名字 · Portfolio
      </div>
    ),
    size
  );
}