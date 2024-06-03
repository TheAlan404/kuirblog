import React from "react";

import { NextSeo } from "next-seo";

import { Title } from "@mantine/core";

function Home() {
  return (
    <>
      <NextSeo title="Anasayfa" description=".kuir blogunun ana sayfası" />
      <Title order={2}>.kuir Blog</Title>
    </>
  );
}

export default Home;
