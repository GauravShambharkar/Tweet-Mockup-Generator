"use client";
import InstaMockGenerator from "@/components/Insta-Mockup-Generator/InstaMockGenerator";
import LinkedinMockGenerator from "@/components/Linkedin-Mock-Generator/LinkedinMockGenerato";
import TweetMockGenerator from "@/components/Tweet-Mockup-Generator/tweetMockup";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setdata] = useState<string | undefined>(undefined);
  const params = useParams();
  useEffect(() => {
    const id = params.toolName;
    setdata(Array.isArray(id) ? id[0] : id);
  }, []);

  if (params.toolName === "tweet-mockup-generator") {
    return <TweetMockGenerator />;
  }

  if (params.toolName === "insta-mockup-generator") {
    return <InstaMockGenerator />;
  }

  if (params.toolName === "linkedin-mockup-generator") {
    return <LinkedinMockGenerator />;
  }

  return (
    <>
      <div>{data}</div>
    </>
  );
};

export default page;
