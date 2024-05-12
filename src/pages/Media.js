import ReactPlayer from "react-player";

import React,{ useState,useEffect,useRef } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import screenfull from "screenfull";

const List = [
  {
    title: "The Shawshank Redemption",
    innerList: [
      {
        innertitle: "1 Two imprisoned",
        describe:"1 Client has methods for creating new data and offers a type-safe way to do it. In this lesson, we take a look at how to add new records in our database by hitting an API routeRehan1",
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png",
        time: "2m",
      },
      {
        innertitle: "2 Two imprisoned",
        describe:"2 Client has methods for creating new data and offers a type-safe way to do it. In this lesson, we take a look at how to add new records in our database by hitting an API routeRehan1",

        url: "https://file-examples.com/storage/fe92070d83663e82d92ecf7/2017/11/file_example_MP3_5MG.mp3",
        poster:
          "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/multimedia-audio-player-icon.png",
        time: "2h 22m",
      },
      {
        innertitle: "3 Two imprisoned",
        describe:"3 Client has methods for creating new data and offers a type-safe way to do it. In this lesson, we take a look at how to add new records in our database by hitting an API routeRehan1",
        url: "http://media.w3.org/2010/05/sintel/trailer.webm",
        poster:
        "https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png",
        time: "2h 22m",
      },
      {
        innertitle: "4 Two imprisoned",
        describe:"4 Client has methods for creating new data and offers a type-safe way to do it. In this lesson, we take a look at how to add new records in our database by hitting an API routeRehan1",
        url: "https://file-examples.com/storage/fe92070d83663e82d92ecf7/2017/11/file_example_OOG_5MG.ogg",
        poster:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/multimedia-audio-player-icon.png",
        time: "2h 22m",
      },
      {
        innertitle: "5 Two imprisoned",
        describe:"5 Client has methods for creating new data and offers a type-safe way to do it. In this lesson, we take a look at how to add new records in our database by hitting an API routeRehan1",

        url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        poster:
        "https://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Player-Video-icon.png",
        time: "2h 22m",
      },
      {
        innertitle: "6 Two imprisoned",
        describe:"6 Client has methods for creating new data and offers a type-safe way to do it. In this lesson, we take a look at how to add new records in our database by hitting an API routeRehan1",

        url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav",
        poster:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/multimedia-audio-player-icon.png",
        time: "2h 22m",
      },
    ],
  },
];
// // when click on previous button show previous video 
 function Media() {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(List[0].innerList[0]);
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const handleVideoData = (data) => {
    setList(data);
  };
console.log(playerRef)
  const previousVideo = () => {
    const newIndex = index > 0 ? index - 1 : List[0].innerList.length - 1;
    setIndex(newIndex);
    setList(List[0].innerList[newIndex]);
  };

  const nextVideo = () => {
    const newIndex = index < List[0].innerList.length - 1 ? index + 1 : 0;
    setIndex(newIndex);
    setList(List[0].innerList[newIndex]);
   
  };
  const videoExtensions = ['.mp4', '.webm'];
  const audioExtensions = ['.mp3', '.wav', '.ogg'];
  const isVideo = (url) => {
    // const lastFourChars = url.slice(-4);
    return videoExtensions.includes(url.slice(-4))
};

  const isAudio = (url) => {
    // const lastFourChars = url.slice(-4);
    return  audioExtensions.includes(url.slice(-4))
  };
  const handleFullScreen = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player) {
        if (isVideo(list.url)) {
          if (!screenfull.isFullscreen) {
            screenfull.request(player);
          } 
          
        }
      }
    }
  };
  const handlePictureInPicture = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player) {
        if (isVideo(list.url)) {
          if (player.requestPictureInPicture) {
            player.requestPictureInPicture();
          }
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
          case "m":
          case "M":
            setMuted((prevMuted) => !prevMuted);
            break;

        case "f":
          case "F":
            if (isVideo(list.url)) { handleFullScreen(); }
            break;
            case "w":
              case "W":
                // Play next media
                handlePictureInPicture();
                break;
        case "n":
        case "N":
          // Play next media
          nextVideo();
          break;

          case "p":
        case "P":
          // Play previous media
          previousVideo();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]); // Listen for changes in index
 
console.log(playerRef.current)
  return (
    <div className="mx-auto w-full bg-blue-200 p-2">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="p-8 md:grid-cols-3">
          <div className="h-96  w-full overflow-auto  bg-smart-50 px-4 md:h-screen md:w-[320px]  ">
            <div>
              <div className="mt-5 flex justify-center">
                <img src="https://cdn.icon-icons.com/icons2/220/PNG/512/windows_media_player_25521.png" alt="logo" width={200} height={200} />
              </div>
              <div className="-m-4 mb-4 border-b border-blue-900 px-4 py-6"></div>
            </div>
            {List.map((data, i) => (
              <div className="mb-6" key={i}>
                <div className="p-2">
                  <p className="font-semibold tracking-wider text-smart-70">
                  {data.title}
                  </p>
                </div>
                {data.innerList.map((data, i) => (
                  <ul key={i}>
                    <button
                      className="w-full"
                      onClick={() => {
                        handleVideoData(data);
                      }}
                    >
                      <li className="group mb-2 rounded-lg border border-transparent bg-gradient-to-br from-transparent to-transparent px-2 py-3 transition duration-200 ease-in-out hover:from-blue-500 hover:to-blue-900">
                        <div className="flex">
                          <img
                            className="m-auto mr-4 w-14 rounded-md"
                            src={data.poster}
                            alt="imageslist"
                          />
                          <div className="w-full text-left">
                            <div className="">
                              <p className="mr-2 text-smart-70">
                                {data.innertitle}
                              </p>
                            </div>
                            <p className="inline-block text-sm text-gray-500 group-hover:text-gray-300">
                              {data.time}
                            </p>
                          </div>
                        </div>
                      </li>
                    </button>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-9 ">
          <div className="col-span-12 lg:col-span-9">
            <section className="sticky top-0 mb-6">
              <nav className="bg-mid-deep flex flex-col justify-between rounded-xl bg-opacity-30 px-6 py-4 text-gray-200 md:flex-row">
                <section className="my-auto">
                  <h1>
                    <span className="font-semibold text-gray-200">
                    {list.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="inline-block w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="font-bold tracking-wider flex">Media Player</div>

                    <span className="text-gray-400">
                       {list.innerTitle}
                    </span>
                  </h1>
                </section>
              </nav>
            </section>
       
            <div className="sticky top-20 grid grid-cols-9 gap-6">
              <section className="col-span-9">
                <div className="sticky top-20">
                  <section className="w-full rounded-xl">
                    <section className="flex">
                     { isVideo(list.url)?
                   (   <ReactPlayer
                       ref={playerRef}
                        url={list.url}
                        controls={true}
                        width="100%"
                        height="600px"
                        volume={1}
                        muted={muted}
                          onPlay={() => console.log("Playing")}
                          onPause={() => console.log("Paused")}
                          onEnded={() => console.log("Ended")}
                          // onToggleFullScreen={toggleFullScreen}
                      />):
                      (<AudioPlayer
                        autoPlay
                        src={list.url}
                        onPlay={e => console.log("onPlay")}
                        // other props here
                      />)
                   }
                    </section>
                    <section className="flex justify-between bg-smart-50 px-4 py-8">
                      <div className="rounded-md ">
                        <p className="text-xl text-white sm:text-3xl">
                        {list.innerTitle}
                        </p>
                        <p className="mt-1 text-gray-500">{list.time}</p>
                        <div className="mt-4">
                          <p className="text-sm text-gray-400 sm:text-lg">
                          {list.describe}
                          </p>
                        </div>
                      </div>
                      <div className="my-auto flex ">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="mr-2 inline-block w-8 cursor-pointer text-gray-400 hover:text-red-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                          </svg>
                        </button>
                        <span className="my-auto text-sm text-gray-400">0</span>
                      </div>
                    </section>
                  </section>
                  <section className="mt-4 rounded-md bg-smart-50">
                    <section className="bg-mid-deep flex justify-between rounded-xl bg-opacity-30 px-6 py-4">


                      <button onClick={() => previousVideo()} className="rounded-xl border border-blue-500 px-4 py-2 text-sm text-gray-200 hover:text-blue-300">
                        ← Previous
                      </button>
                      <button onClick={() => nextVideo()} className="rounded-xl border border-blue-500 px-4 py-2 text-sm text-gray-200 hover:text-blue-300">
                        Next →
                      </button>
                    </section>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Media