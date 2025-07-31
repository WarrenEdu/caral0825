import { useEffect, useRef, useState } from "react";

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubeVideo = ({ videoId, title = "YouTube Video", className = "" }: YouTubeVideoProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  // Load YouTube API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
      return;
    }

    // Load YouTube API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    // Set up global callback
    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!isAPIReady || !playerRef.current || player) return;

    const newPlayer = new window.YT.Player(playerRef.current, {
      videoId: videoId,
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        fs: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 0
      },
      events: {
        onReady: () => {
          console.log("YouTube player ready");
        },
        onError: (event: any) => {
          console.error("YouTube player error:", event.data);
        }
      }
    });

    setPlayer(newPlayer);
  }, [isAPIReady, videoId, player]);

  // Set up Intersection Observer for auto play/pause
  useEffect(() => {
    if (!player || !playerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          // Video is visible, play it
          try {
            player.playVideo();
          } catch (error) {
            console.log("Could not auto-play video:", error);
          }
        } else {
          // Video is not visible, pause it
          try {
            player.pauseVideo();
          } catch (error) {
            console.log("Could not pause video:", error);
          }
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of the video is visible
      }
    );

    observer.observe(playerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [player]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <div
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
          title={title}
        />
      </div>
    </div>
  );
};

export default YouTubeVideo;