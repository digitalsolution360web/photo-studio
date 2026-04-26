"use client";

import { Play } from "lucide-react";

interface YouTubeButtonProps {
  url: string;
  className?: string;
  showText?: boolean;
}

export function YouTubeButton({ url, className, showText = false }: YouTubeButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (showText) {
    return (
      <div 
        onClick={handleClick}
        className={`pt-2 text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer ${className}`}
      >
        Watch Showreel <span className="text-xs">→</span>
      </div>
    );
  }

  return (
    <div 
      onClick={handleClick}
      className={`p-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all cursor-pointer group/yt ${className}`}
      title="Watch on YouTube"
    >
      <Play size={12} fill="currentColor" />
    </div>
  );
}
