type PlaylistResponse = {
  items: { contentDetails: { videoId: string } }[];
  nextPageToken?: string;
};

export const fetchPlaylistVideos = async (
  playlistId: string,
  apiKey: string
): Promise<string[]> => {
  const fetchFromYouTubeAPI = async (
    url: string
  ): Promise<PlaylistResponse> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: PlaylistResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  let videos: string[] = [];
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&key=${apiKey}&maxResults=50`;

  while (url) {
    const data = await fetchFromYouTubeAPI(url);
    videos = videos.concat(
      data.items.map((item) => item.contentDetails.videoId)
    );
    url = data.nextPageToken
      ? `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&key=${apiKey}&pageToken=${data.nextPageToken}`
      : null;
  }

  return videos;
};
