import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bisum",
  };

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-400">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Bisum Tiwana</h1>
                <p className="text-2xl">Team Leader</p>
            </div>
        </div>        
    );
}