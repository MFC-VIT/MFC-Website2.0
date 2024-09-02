import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Blogcards = ({ height, width, imageSrc, title, content, avatarSrc, authorName, authorTitle, buttonText, className }) => {
  const contentRef = useRef(null);
  const [truncatedContent, setTruncatedContent] = useState(content);

  useEffect(() => {
    const truncateContent = () => {
      const element = contentRef.current;
      if (element) {
        const maxHeight = element.clientHeight;
        const words = content.split(' ');
        let truncated = '';
        let result = '';

        for (let i = 0; i < words.length; i++) {
          const testContent = truncated + words[i] + ' ';
          element.textContent = testContent;

          if (element.scrollHeight > maxHeight) {
            result = truncated.trim() + '......';
            break;
          }

          truncated = testContent;
        }

        setTruncatedContent(result || content);
      }
    };

    truncateContent();
    window.addEventListener('resize', truncateContent);
    return () => window.removeEventListener('resize', truncateContent);
  }, [content]);

  return (
    <div
      className={`border-2 border-[#F7813F] rounded-[20px] shadow-lg bg-black text-white flex flex-col sm:flex-row ${className}`}
      style={{ height, width }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Blog"
          className="w-full sm:w-[40%] h-36 sm:h-auto object-cover rounded-t-[20px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] sm:rounded-tr-none brightness-50 contrast-150 hue-rotate-30 right-blur"
        />
      )}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {title && <h2 className="text-xl mb-2 font-yoshiro_b">{title}</h2>}
          {content && (
            <p ref={contentRef} className="text-white text-base sm:text-lg font-yoshiro overflow-hidden">
              {truncatedContent}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center mt-4 sm:mt-0">
          <div className="flex items-center">
            {avatarSrc && <img src={avatarSrc} alt="Author" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full" />}
            <div className="ml-2 sm:ml-4 font-apex">
              {authorName && <p className="text-sm sm:text-base">{authorName}</p>}
              {authorTitle && <p className="text-[#F7813F] text-xs sm:text-sm">{authorTitle}</p>}
            </div>
          </div>
          <button className="bg-[#0A0807] border-2 border-[#F7813F] hover:bg-[#F7813F] hover:text-white py-1 px-2 sm:px-4 rounded-full flex items-center font-apex text-xs gap-1 sm:gap-2 group">
  <span className="hidden sm:inline">{buttonText}</span>
  <BsArrowUpRightCircle className="text-base text-[#F7813F] group-hover:text-white" />
</button>

        </div>
      </div>
    </div>
  );
}

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
};

export default Blogcards;