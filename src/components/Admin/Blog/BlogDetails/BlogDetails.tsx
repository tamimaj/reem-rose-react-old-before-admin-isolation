import React, { useEffect, useState, Fragment } from "react";

import Loader from "../../../Loader/Loader";
import { useParams } from "react-router-dom";
import { getSpecificPost } from "../../../../api/private/blogs";
import moment from "moment";
import StatusTag from "../StatusTag/StatusTag";
import { HtmlConverter } from "../../../../hooks/HtmlConverter/HtmlConverter";

interface PostType {
  _id: string;
  title: string;
  summary: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  coverImage: string;
  content: string;
  isPublished: boolean;
  categoriesData: [
    {
      name: string;
    }
  ];
  langCode: string;
  tags: string[];
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const BlogDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [postData, setPostData] = useState<PostType>({
    _id: "",
    title: "",
    summary: "",
    slug: "",
    seoTitle: "",
    seoDescription: "",
    coverImage: "",
    content: "",
    isPublished: false,
    categoriesData: [{ name: "" }],
    langCode: "",
    tags: [],
    keywords: [],
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  });

  const getPostData = async () => {
    if (id) {
      setLoading(true);
      let response = await getSpecificPost(id);
      if (!response || response?.status !== 200) {
        return;
      }

      setPostData(response.data.postData);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPostData();
  }, [id]);
  return (
    <div className=" pt-4 pb-20 w-full flex justify-center overflow-x-hidden">
      <div className="w-full 3xl:w-[90%] max-w-[1440px] flex flex-col overflow-x-hidden items-center">
        {loading ? (
          <Loader className="h-[100vh]" />
        ) : (
          <div className="flex flex-col items-center w-full overflow-y-hidden pb-24">
            <h6 className="text-white font-medium text-xl mr-12">
              Post Details
            </h6>
            <div className="flex w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden">
              <div className="flex flex-col md:flex-row md:justify-between w-full text-white">
                <div className="flex flex-col ">
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Title : </span>{" "}
                    {postData.title}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Id : </span>{" "}
                    {postData._id}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Created At : </span>{" "}
                    {moment(postData.createdAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm flex ">
                    <span className="font-normal text-base mr-2">
                      Status :{" "}
                    </span>{" "}
                    {postData.isPublished ? (
                      <StatusTag
                        value="Published"
                        className="text-primary bg-primaryLight"
                      />
                    ) : (
                      <StatusTag
                        value="Draft"
                        className="text-yellow bg-lightYellow"
                      />
                    )}
                  </span>

                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">SEO Title : </span>{" "}
                    {postData.seoTitle}
                  </span>

                  <span className="my-2 font-light text-sm flex">
                    <span className="font-normal text-base">Tags:</span>{" "}
                    <div className="flex flex-wrap max-w-[250px] ml-2 mt-[2px]">
                      {postData.tags.map((tag, idx) => (
                        <Fragment key={idx}>
                          {postData.tags.length !== idx + 1 && "# "}
                          {tag}{" "}
                        </Fragment>
                      ))}
                    </div>
                  </span>

                  <span className="my-2 font-light text-sm flex">
                    <span className="font-normal text-base">Keywords:</span>{" "}
                    <div className="flex flex-wrap max-w-[250px] ml-2 mt-[2px]">
                      {postData.keywords.map((keyword, idx) => (
                        <Fragment key={idx}>
                          {postData.keywords.length !== idx + 1 && "# "}
                          {keyword}{" "}
                        </Fragment>
                      ))}
                    </div>
                  </span>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Slug : </span>{" "}
                    {postData.slug}
                  </span>
                  <span className="my-2 font-light text-sm flex">
                    <span className="font-normal text-base">Categories:</span>{" "}
                    <div className="flex flex-wrap max-w-[250px] ml-2 mt-[2px]">
                      {postData.categoriesData.map((category, idx) => (
                        <Fragment key={idx}>
                          {category.name}{" "}
                          {postData.categoriesData.length !== idx + 1 && " , "}
                        </Fragment>
                      ))}
                    </div>
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">Updated At : </span>{" "}
                    {moment(postData.updatedAt).format("DD.MM.YY")}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Published At :{" "}
                    </span>{" "}
                    {postData.publishedAt
                      ? moment(postData.publishedAt).format("DD.MM.YY")
                      : "Not Published Yet"}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      SEO Description :{" "}
                    </span>{" "}
                    {postData.seoDescription}
                  </span>
                  <span className="my-2 font-light text-sm">
                    <span className="font-normal text-base">
                      Language Code :{" "}
                    </span>{" "}
                    {postData.langCode}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Summary </span>{" "}
              <span className="text-white text-sm">{postData.summary}</span>
            </div>
            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">
                Cover Image{" "}
              </span>{" "}
              <img
                src={postData.coverImage}
                alt={postData.seoTitle}
                className="mt-4 w-full h-[500px]"
              />
            </div>

            <div className="flex flex-col w-[90%] xl:w-[80%] bg-primaryLight px-4 py-2 rounded mt-6 overflow-x-hidden mt-3">
              <span className="font-medium text-white text-lg">Content </span>{" "}
              <span
                className="text-white text-sm"
                dangerouslySetInnerHTML={HtmlConverter(postData.content)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
