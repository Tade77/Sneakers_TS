import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data";

const Preview = () => {
  const [image, setImage] = useState("");
  const { imgId } = useParams();

  useEffect(() => {
    const viewImg = products.find(
      (product: { id: string; image: string }) => product.id === imgId
    );
    setImage(viewImg.image);
  }, []);
  return <div>{image}</div>;
};

export default Preview;
