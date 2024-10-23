import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Avatar from "./Avatar";

const Blogcards = ({
  height,
  width,
  imageSrc,
  title,
  content,
  avatarSrc,
  authorName,
  authorTitle,
  buttonText,
  className,
  blogLink,
}) => {
  const contentRef = useRef(null);
  const [truncatedContent, setTruncatedContent] = useState(content);

  useEffect(() => {
    const truncateContent = () => {
      const element = contentRef.current;
      if (element) {
        const maxHeight = element.clientHeight;
        const words = content.split(" ");
        let truncated = "";
        let result = "";

        for (let i = 0; i < words.length; i++) {
          const testContent = truncated + words[i] + " ";
          element.textContent = testContent;

          if (element.scrollHeight > maxHeight) {
            result = truncated.trim() + "......";
            break;
          }

          truncated = testContent;
        }

        setTruncatedContent(result || content);
      }
    };

    truncateContent();
    window.addEventListener("resize", truncateContent);
    return () => window.removeEventListener("resize", truncateContent);
  }, [content]);

  return (
    <div
      className={`border-2 border-[#F7813F] rounded-[20px] shadow-lg bg-black text-white flex flex-col sm:flex-row ${className}`}
      style={{ height, width }}
    >
      {imageSrc 
        ? (
        <img
          src={imageSrc}
          alt="Blog"
          className="w-full sm:w-[40%] h-36 sm:h-auto object-cover rounded-t-[20px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] sm:rounded-tr-none brightness-50 contrast-150 hue-rotate-30 right-blur"
        /> 
        )
      : (
        <div className="flex justify-center items-center">
          <svg className="w-full sm:w-[40%] h-36 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
        </div>
      )}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {title 
            ? <h2 className="text-xl mb-2 font-yoshiro_b">{title}</h2>
            : <div className="mt-2 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
          }
          {content ? (
            <p
              ref={contentRef}
              className="text-white text-base sm:text-lg font-yoshiro overflow-hidden"
            >
              {truncatedContent}
            </p>
          ) : (
            <div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-4 sm:mt-0">
          <div className="flex items-center">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt="Author"
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
              />
            ) : (
              <Avatar
                name={authorName}
                color="dark"
                type={authorName ? "name" : "icon"}
                loading={authorName}
              />
            )}
            <div className="ml-2 sm:ml-4 font-apex flex flex-col justify-start items-center">
              {authorName ? (
                <p className="text-sm sm:text-base">{authorName}</p>
              ) : (
                <div className="mt-2 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
              )}
              {authorTitle ? (
                <p className="text-[#F7813F] text-xs sm:text-sm">
                  {authorTitle}
                </p>
              ) : (
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
              )}
            </div>
          </div>
          {buttonText && <a
            href={blogLink}
            target="_blank"
            className="bg-[#0A0807] border-2 border-[#F7813F] hover:bg-[#F7813F] hover:text-white py-1 px-2 sm:px-4 rounded-full flex items-center font-apex text-xs gap-1 sm:gap-2 group"
          >
            <span className="hidden sm:inline">{buttonText}</span>
            <BsArrowUpRightCircle className="text-base text-[#F7813F] group-hover:text-white" />
          </a>}
        </div>
      </div>
    </div>
  );
};

Blogcards.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  avatarSrc: PropTypes.string,
  authorName: PropTypes.string,
  authorTitle: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  blogLink: PropTypes.string,
};

export default Blogcards;
