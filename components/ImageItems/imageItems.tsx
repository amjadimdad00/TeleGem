import Image from "next/image";
import { shows } from "../../utils/shows";

export const imageItems = (handleImageClick: (playlistId: string) => void) =>
  shows.map((show) => (
    <Image
      key={show.id}
      src={show.src}
      alt={show.alt}
      className="h-full w-full"
      onClick={() => handleImageClick(show.playlistId)}
    />
  ));
