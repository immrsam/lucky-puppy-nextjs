import { useState, useEffect } from "react";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ImageGallery from "react-image-gallery";

function GetGallery() {
  const dbInstanceImages = collection(database, "images");
  const [imagesArray, setImagesArray] = useState([]);
  let images = [];
  useEffect(() => {
    getDocs(dbInstanceImages).then((data) => {
      setImagesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, []);

  if (imagesArray.length > 0) {
    imagesArray.forEach((img) => {
      let obj = {
        original: img.link + `=h200`,
        thumbnail: img.link,
      };
      images.push(obj);
    });
  }

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets="true"
        thumbnailPosition="bottom"
      />
    </div>
  );
}

function GetImages() {
  const dbInstanceImages = collection(database, "images");
  const [imagesArray, setImagesArray] = useState([]);
  let images = [];
  let markup;
  useEffect(() => {
    getDocs(dbInstanceImages).then((data) => {
      setImagesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, []);

  if (imagesArray.length > 0) {
    imagesArray.forEach((img) => {
      let obj = {
        original: img.link,
        thumbnail: img.link,
      };
      images.push(obj);
    });
    markup = images.map((img, index) => {
      return (
        <img
          className="latest-pics"
          key={index}
          src={img.original}
          width="100px"
        />
      );
    });
  }
  console.log(markup);
  return <div>{markup}</div>;
}

export { GetGallery, GetImages };
