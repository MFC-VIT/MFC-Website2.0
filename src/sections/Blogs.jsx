import React from "react";
import mainimage from "../assets/images/blogimg.webp";
import Blogcards from "../components/Blogcards";
import Seemore from "../components/Seemore";
import authorimage from "../assets/images/author_img.webp"
const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="font-apex text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] text-white mb-8">
        BLOGS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:grid-rows-3 gap-3 w-full max-w-7xl mx-auto">
        <Blogcards
          height="100%"
          width="100%"
          imageSrc={mainimage}
          title="The AI REVOLUTION"
          content="Bibendum platea. Tellus vitae at a in. consectetur. Lac..."
          avatarSrc={authorimage}
          authorName="KG"
          authorTitle="FIREFOX"
          buttonText="EXPLORE"
          className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-1 xl:col-span-2 xl:row-start-1"
        />
        <Blogcards
          height="100%"
          width="100%"
          imageSrc={mainimage}
          title="The AI REVOLUTION"
          content=" Bibendum platea. Tellus vitae at a in. consectetur. Lac...Bibendum platea. Tellus vitae at a in. consectetur. Lac..."
          avatarSrc={authorimage}
          authorName="KG"
          authorTitle="FIREFOX"
          buttonText="EXPLORE"
          className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-3 xl:col-span-3 xl:row-start-1"
        />
        <Blogcards
          height="100%"
          width="100%"
          imageSrc={mainimage}
          title="The AI REVOLUTION"
          content="Bibendum platea. Tellus vitae at a in. consectetur"
          avatarSrc={authorimage}
          authorName="KG"
          authorTitle="FIREFOX"
          buttonText="EXPLORE"
          className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-4 xl:col-span-2 xl:row-start-2"
        />
        <Blogcards
          height="100%"
          width="100%"
          imageSrc={mainimage}
          title="The AI REVOLUTION"
          content="Bibendum platea. Tellus vitae at a in. consectetur. Lac...Bibendum platea. Tellus vitae at a in. consectetur. Lac...Bibendum platea. Tellus vitae at a in. consectetur. Lac...Bibendum platea. Tellus vitae at a in. consectetur. Lac... eifnie isdnfis isfisd  isfdnisd isdvisd isdnvisd "
          avatarSrc={authorimage}
          authorName="KG"
          authorTitle="FIREFOX"
          buttonText="EXPLORE"
          className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-1 xl:col-span-3 xl:row-start-2 xl:row-span-2"
        />
        <Seemore
          className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-4 xl:col-span-2 xl:row-start-3"
        />
      </div>
    </div>
  );
};

export default Blogs;