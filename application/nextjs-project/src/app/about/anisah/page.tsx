import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anisah",
  };

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-200">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Anisah Chowdhury</h1>
                <p className="text-2xl">Backend</p>
            </div>
        </div>        
    );
}