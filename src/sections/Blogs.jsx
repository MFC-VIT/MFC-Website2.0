import { useEffect, useState } from "react";
import mainimage from "../assets/images/blogimg.webp";
import Blogcards from "../components/Blogcards";
import Seemore from "../components/Seemore";
// import authorimage from "../assets/images/author_img.webp"
import axios from "axios";
import { BLOGS_ENDPOINT, links } from "../constants";

// Blog { id, title, body, authorName, autheredDate, imgLink, mediumLink }

const useBlogs = (page, limit) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(BLOGS_ENDPOINT + `?page=${page}&limit=${limit}`)
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page, limit]);

  return { blogs, loading };
};

const Blogs = () => {
  const { blogs, loading } = useBlogs(1, 5);
  return (
    <div className="w-[85%] mx-auto flex flex-col gap-12 items-center justify-center my-5">
      <h1 className="font-apex text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] text-white ">
        BLOGS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:grid-rows-3 gap-3 w-full mx-auto">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Blogcards
              height="100%"
              width="100%"
              imageSrc={blogs[0].imgLink || mainimage}
              title={blogs[0].title}
              content={blogs[0].body}
              // avatarSrc={authorimage}
              authorName={blogs[0].authorName}
              blogLink={blogs[0].mediumLink}
              authorTitle="FIREFOX"
              buttonText="EXPLORE"
              className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-1 xl:col-span-2 xl:row-start-1"
            />
            <Blogcards
              height="100%"
              width="100%"
              imageSrc={blogs[1].imgLink || mainimage}
              title={blogs[1].title}
              content={blogs[1].body}
              // avatarSrc={authorimage}
              authorName={blogs[1].authorName}
              blogLink={blogs[1].mediumLink}
              authorTitle="FIREFOX"
              buttonText="EXPLORE"
              className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-3 xl:col-span-3 xl:row-start-1"
            />
            <Blogcards
              height="100%"
              width="100%"
              imageSrc={blogs[2].imgLink || mainimage}
              title={blogs[2].title}
              content={blogs[2].body}
              // avatarSrc={authorimage}
              authorName={blogs[2].authorName}
              blogLink={blogs[2].mediumLink}
              authorTitle="FIREFOX"
              buttonText="EXPLORE"
              className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-4 xl:col-span-2 xl:row-start-2"
            />
            <Blogcards
              height="100%"
              width="100%"
              imageSrc={blogs[3].imgLink || mainimage}
              title={blogs[3].title}
              content={blogs[3].body}
              // avatarSrc={authorimage}
              authorName={blogs[3].authorName}
              blogLink={blogs[3].mediumLink}
              authorTitle="FIREFOX"
              buttonText="EXPLORE"
              className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-1 xl:col-span-3 xl:row-start-2 xl:row-span-2"
            />
          </>
        )}
        <Seemore
          className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-4 xl:col-span-2 xl:row-start-3"
          link={links.medium}
        />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <>
      <Blogcards
        height="100%"
        width="100%"
        className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-1 xl:col-span-2 xl:row-start-1 animate-pulse opacity-20"
      />
      <Blogcards
        height="100%"
        width="100%"
        className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-3 xl:col-span-3 xl:row-start-1 animate-pulse opacity-20"
      />
      <Blogcards
        height="100%"
        width="100%"
        className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-4 xl:col-span-2 xl:row-start-2 animate-pulse opacity-20"
      />
      <Blogcards
        height="100%"
        width="100%"
        className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-1 xl:col-span-3 xl:row-start-2 xl:row-span-2 animate-pulse opacity-20"
      />
    </>
  );
};

export default Blogs;
