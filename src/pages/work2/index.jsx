/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumn from "../../components/Work-Three-Column";

const Work2 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Simply Creation Rattan Furniture",
          second: "Timeless Elegance, Natural Comfort",
        }}
        // title = "text",
        content="Discover the beauty of handcrafted rattan furniture, where tradition meets modern design. Made from high-quality, sustainable materials, our rattan pieces bring warmth, durability, and a touch of nature to your living spaces. Whether it's for indoor or outdoor use, our collection combines comfort with aesthetic appeal, creating a harmonious blend of style and functionality."
      />
      <WorkThreeColumn />
    </MainLayout>
  );
};

export default Work2;
