import AlbumCard from "@/components/cards/AlbumCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { AlbumInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const AlbumPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/albums`);
  const albumList: AlbumInfo[] = response.data;

  return (
    <>
      {albumList.map((album, idx) => (
        <AlbumCard albumInfo={album} key={idx} />
      ))}
    </>
  );
};

export default AlbumPage;
