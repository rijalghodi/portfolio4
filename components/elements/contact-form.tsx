"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        required
        placeholder="Your message"
        className="w-full border p-2"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-black text-white">
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
