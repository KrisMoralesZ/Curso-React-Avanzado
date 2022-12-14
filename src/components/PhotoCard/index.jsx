import React from "react";
import { ImgWrapper, Img, Button } from "./styles.sc";
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULTIMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULTIMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />
        {likes} likes!
      </Button>
    </article>
  );
}
