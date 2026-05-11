"use client";

import { useState } from "react";
import { Share2, MessageCircle } from "lucide-react";

interface BlogShareButtonsProps {
  shareUrl: string;
  title: string;
}

export default function BlogShareButtons({ shareUrl, title }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-neon-green transition-colors"
      >
        <Share2 size={14} />
        {copied ? "Copied!" : "Copy Link"}
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-neon-green transition-colors"
      >
        <MessageCircle size={14} />
        Share
      </a>
    </div>
  );
}
