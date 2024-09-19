import type { Metadata } from "next";
import '../anisah/page.css'; // Import your CSS file

export const metadata: Metadata = {
    title: "Anisah",
};

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-300 custom-container">
            <div className="text-center">
                <div className="custom-box">
                    <h1 className="text-4xl font-bold mb-4 custom-title">Anisah Chowdhury</h1>
                    <p className="text-2xl custom-subtitle">Backend</p>
                </div>
            </div>
        </div>
    );
}