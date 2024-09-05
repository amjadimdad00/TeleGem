import { useState } from "react";

import YouTube from "react-youtube";
import useResponsiveVideoOpts from "../../../utils/useResponsiveVideoOpts";

import Carousel from "../carousel/Carousel";
import { imageItems } from "../ImageItems/imageItems";

const Player = () => {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlistId, setPlaylistId] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const opts = {
    ...useResponsiveVideoOpts(),
    playerVars: {
      listType: "playlist",
      list: playlistId,
      autoplay: 1,
    },
  };

  const handleImageClick = (newPlaylistId: string) => {
    setPlaylistId(newPlaylistId);
    setShowPlaylist(true);
    setLoading(true);
  };

  const handleVideoReady = () => {
    setLoading(false);
  };

  const items = imageItems(handleImageClick);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      {showPlaylist && playlistId ? (
        <div className="video-section flex flex-col items-center">
          {loading && <div className="loader"></div>}
          <YouTube
            videoId={playlistId}
            opts={opts}
            onReady={handleVideoReady}
          />
        </div>
      ) : (
        <>
          <Carousel items={items} />
        </>
      )}

      {showPlaylist && (
        <button
          onClick={() => {
            setShowPlaylist(false);
            setPlaylistId("");
          }}
          className="mt-2 rounded-lg bg-pink-500 p-2.5 text-3xl font-medium text-white hover:bg-pink-400"
        >
          Go Back
        </button>
      )}
    </main>
  );
};

export default Player;
