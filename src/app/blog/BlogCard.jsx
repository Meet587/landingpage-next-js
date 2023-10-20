import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Renders a blog card component.
 * @param {Object} props - The component props.
 * @param {Object} props.blogStyle - An object containing CSS class names for different elements of the blog card.
 * @param {Object} props.blog - An object containing information about the blog post.
 * @param {boolean} props.load - A flag indicating whether the blog card should display a placeholder while loading.
 * @param {Function} props.slugify - A function that takes a string and returns a slugified version of it.
 * @param {number} props.index - The index of the blog card in a list of cards.
 * @returns {JSX.Element} The rendered blog card component.
 */
const BlogCard = ({ blogStyle, blog, load, slugify, index }) => {
  const { title, author, date, read, metaDescription, img, author_img } = blog;

  const blogLink = `/blog/${slugify(title)}`;

  const blogImageSrc = require(`../../../public/images/blogs/${img}`);
  //   const authorImageSrc = require(`../../../public/images/${author_img}`);
  const authorImageSrc = require(`../../../public/images/logo-icon.png`);

  const containerClassName = load
    ? `placeholder ${blogStyle.blog_box}`
    : blogStyle.blog_box;
  const imageWidth = index === 0 ? "100%" : "100%";
  const imageStyle = index === 0 ? { height: "100%" } : {};

  return (
    <Link
      className="text-primary"
      href={{
        pathname: blogLink,
        query: blog,
      }}
      as={blogLink}
    >
      <div className={containerClassName}>
        <div style={{ position: "relative" }}>
          <Image
            className={blogStyle.blog_img}
            src={blogImageSrc}
            alt="Beautiful Day with Friends"
            loading="lazy"
            width={"100%"}
            style={{ height: "250px" }}
          />
          <div className={blogStyle.blog_category}>
            <span>{author}</span>
          </div>
        </div>
        <div className={blogStyle.blog_content_wrap}>
          <div
            className={`${blogStyle.blog_descr_wrap} ${blogStyle.valign_wrapper} font-size-14 fw-medium`}
          >
            <div>
              <Image
                width={"35"}
                height={"35"}
                src={`/public/images/logo-icon.png`}
                alt=""
                className={blogStyle.admin_img}
              />
            </div>
            <span>{date}</span>
            <span>.</span>
            <span>{read}</span>
          </div>
          <div>
            <h4 className={`${blogStyle.line_height} ${blogStyle.blog_title}`}>
              {title}
            </h4>
            <div
              style={{
                borderTop: "1px solid #ecedef",
                marginTop: "10px",
              }}
              className=""
            >
              <p className="pt-2 font-size-13 ">
                <span className={`${blogStyle.line_height}`}>
                  {metaDescription}
                </span>
              </p>
              <div className="font-size-13 " style={{ color: "#0d6efd" }}>
                Read more <i className="mdi mdi-arrow-right arrow"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogCard);
