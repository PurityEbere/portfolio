import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Purity Udeh — Technical Product Manager & Engineer";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#ffffff",
                    color: "#111111",
                    padding: "75px",
                    fontFamily: "Arial",
                }}
            >
                <div style={{ fontSize: 25, color: "#777777" }}>
                    PURITY UDEH
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 76, fontWeight: 700 }}>
                        Product & Engineering
                    </div>

                    <div
                        style={{
                            fontSize: 30,
                            color: "#777777",
                            marginTop: 25,
                        }}
                    >
                        Technical Product Manager
                    </div>
                </div>

                <div style={{ fontSize: 22, color: "#999999" }}>
                    purity.udrics.com
                </div>
            </div>
        ),
        size
    );
}