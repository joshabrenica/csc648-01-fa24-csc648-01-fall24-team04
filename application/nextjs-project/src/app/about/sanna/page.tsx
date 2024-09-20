import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sanna",
};

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-100">
            <div className="text-center">
                <div className="text-6xl mb-4 text-pink-400">🌸</div> {/* Larger flower above the name */}
                <h1 className="text-4xl font-bold mb-4 text-pink-400">Sanna Mohabbat</h1>
                <p className="text-2xl text-pink-400">Frontend & Backend</p>
            </div>
        </div>
    );
}
