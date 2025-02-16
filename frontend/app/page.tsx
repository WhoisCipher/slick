"use client";

import { useState } from "react";

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);

        const droppedFile = event.dataTransfer.files[0]; // Get the first dropped file
        if (droppedFile) {
            setFile(droppedFile);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0] || null);
    };

    const uploadFile = async () => {
        if (!file) return alert("Please select or drop a file");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                alert("Upload successful: " + data.file.filename);
            } else {
                alert("Upload failed: " + data.message);
            }
        } catch (error) {
            console.error("Error uploading:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mb-4 text-xl font-bold">Upload File</h1>

            {/* Drag & Drop Area */}
            <div
                className={`w-96 h-40 flex items-center justify-center border-2 border-dashed
                ${dragging ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-50"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <p className="text-gray-600">Drag & Drop file here</p>
            </div>

            {/* File Input */}
            <input type="file" onChange={handleFileChange} className="mt-4" />

            {/* Upload Button */}
            <button
                onClick={uploadFile}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Upload
            </button>

            {/* Display Selected File */}
            {file && <p className="mt-2 text-sm text-gray-700">Selected: {file.name}</p>}
        </div>
    );
}

