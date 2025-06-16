import React, { useState, useEffect, useRef, useCallback } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

interface VideoSnippet {
  title: string;
  description: string;
  thumbnails: {
    medium: { url: string };
  };
  resourceId: {
    videoId: string;
  };
}

interface VideoItem {
  id: string;
  snippet: VideoSnippet;
}

interface ApiResponse {
  items: VideoItem[];
  nextPageToken?: string;
}

const YouTubeWebinars: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const YOUTUBE_API_KEY = siteConfig.customFields.youtube_api_key;
  const PLAYLIST_ID = "PLS60dhorR-hgQ5n5L1boEQh0oVD-_k75p";
  const MAX_RESULTS = 6;

  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchVideos = async (pageToken: string | null = null) => {
    if (loading) return;
    setLoading(true);

    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("maxResults", MAX_RESULTS.toString());
    url.searchParams.set("playlistId", PLAYLIST_ID);
    url.searchParams.set("key", YOUTUBE_API_KEY);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const response = await fetch(url.toString());
    const data: ApiResponse = await response.json();

    setVideos(prev => [...prev, ...data.items]);
    setNextPageToken(data.nextPageToken || null);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && nextPageToken && !loading) {
        fetchVideos(nextPageToken);
      }
    },
    [nextPageToken, loading]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "200px",
      threshold: 0
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.snippet.resourceId.videoId} className={styles.card}>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              frameBorder="0"
              allowFullScreen
              title={video.snippet.title}
            />
            <div className={styles.cardContent}>
              <p className={styles.title}>
                {video.snippet.title.replace(/\s*\| Open Telekom Cloud \| T-Systems\s*$/, '')}
              </p>
              <p className={styles.description}>
                {video.snippet.description.slice(0, 250)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <div ref={loaderRef} className={styles.loader}>
        {loading && <p>Loading more webinars...</p>}
      </div>
    </div>
  );
};

export default YouTubeWebinars;
