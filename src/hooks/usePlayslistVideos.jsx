import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import useGetVideos from "./useGetVideos";

const usePlaylistVideos = () => {

  const [playlistVideo, setPlaylistVideo] = useState([]);

  const [params] = useSearchParams();
  
  const videos = useGetVideos();

    const filterVideo = videos.filter((vidoeId) => vidoeId.id === params.get("v"));
  
    const cId = filterVideo?.[0]?.snippet?.channelId;

    useEffect(() => {
      if(cId){
        watchpagePlaylistVideo(cId);
      }
    },[cId]);
    
      const watchpagePlaylistVideo = async (channelId) => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId="+ channelId +"&maxResults=50&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        setPlaylistVideo(json.items)
      };

      return playlistVideo;
}

export default usePlaylistVideos;