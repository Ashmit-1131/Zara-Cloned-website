import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Women = () => {
  return (
    <>
      <div style={{ marginTop: "10px" }}> {/* Margin top for small screens */}
        <Link>
          <img
            width="100%"
            src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1921/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997"
          />

          <img
            width="100%"
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-party/subhome-xmedia-45-2//w/1921/IMAGE-landscape-default-fill-92c17c8f-160b-4edc-a2bb-b49d1e165b21-default_0.jpg?ts=1668167617711"
          />

          <img
            width="100%"
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/1921/IMAGE-landscape-fill-c68605f6-1f94-4830-8f4a-0f3bf22017e2-default_0.jpg?ts=1663579002306"
          />

          <img
            width="100%"
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-45-2//w/1921/IMAGE-landscape-fill-a4f9c169-be06-4827-9cd3-041d7d62c12d-default_0.jpg?ts=1668167950339"
          />
        </Link>
      </div>
    </>
  );
};

export default Women;
