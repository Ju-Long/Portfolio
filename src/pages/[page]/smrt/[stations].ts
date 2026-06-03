import { generateSvg } from "@/utils/smrt/generate-svg";
import { Resvg } from "@resvg/resvg-js";

export async function GET({ params, request }) {
    if (params.page !== "travelsg") {
        return new Response(null, { status: 404, statusText: "Not found" });
    }

    const url = new URL(request.url);
    const station = params.stations;
    const border = Number.parseInt(url.searchParams.get("border") || "");

    const svg = await generateSvg(station, {
        border: Number.isNaN(border) ? undefined : border,
    });

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer as any, {
        headers: {
            "Content-Type": "image/png",
            "Cache-Control": `public, s-maxage=${60 * 60 * 24}, max-age=${60 * 60 * 24}`,
        },
    });
}