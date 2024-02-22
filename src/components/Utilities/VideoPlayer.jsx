"use client";
import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = (youtubeId) => {
  // biar lgsung terbuka makanya true
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    // biar bsa menutup dan membuka nya
    setIsOpen((prevState) => !prevState);
  };

  // kayak css, minimal ada width dan height biar nyala (udh darisono)
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          // nentukan tinggi panjang komponent dari player
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return (
        <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 bg-color-accent text-color-primary text-xl hover:bg-color-accent2 transition-all shadow-xl"
        >
            Tonton Trailer
        </button>
    )
}
  // return <div>sda</div>

   // ketika dibuka yg d munculin
    // return isOpen ? <Player /> : null
    return isOpen ? <Player /> : <ButtonOpenPlayer/>
};

export default VideoPlayer;
