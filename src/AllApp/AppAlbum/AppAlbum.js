import AppHeader from "./AppHeader";
import AppSearch from "./AppSearch";
import album from "./dataImage";
import Card from "./Card";
import ImagePost from "./ImagePost";
import { useState } from "react";

function AppAlbum() {
  // Search
  const [searchText, setSearchText] = useState("");
  const filterAlbumElement = album.filter((eachCard) => {
    return eachCard.title
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()); //check have a (searchText) includes title?
  }); //อันไหนเข้าเงื่อนไขก็จะมาอยู่ใน array filterAlbumElement

  // create card
  const albumElement = filterAlbumElement.map((eachCard) => {
    return (
      <Card
        InfoEachCard={eachCard}
        key={eachCard.id}
        onImgClick={onImgOpenClick}
      />
    );
  });

  // open-close img
  const [selectedImg, setSelectImg] = useState(null);
  function onImgOpenClick(theImg) {
    setSelectImg(theImg);
  }
  function onImgCloseClick() {
    setSelectImg(null);
  }
  let imgPost = null;
  if (!!selectedImg) {
    //check selected existing
    imgPost = <ImagePost selected={selectedImg} onBgClick={onImgCloseClick} />;
  }

  return (
    <div className="h-screen">
      <AppHeader />
      <AppSearch value={searchText} onValueChange={setSearchText} />
      <section className="container w-full px-3 md:px-0 mx-auto my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {albumElement}
      </section>
      {imgPost}
    </div>
  );
}
export default AppAlbum;
