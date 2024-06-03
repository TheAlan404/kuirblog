import React from "react";

import { NextSeo } from "next-seo";

import { Title } from "@mantine/core";

function Contact() {
  return (
    <>
      <NextSeo title="İletişim" description="Bizimle iletişime geç" />
      <Title order={2}>İletişim</Title>
    </>
  );
}

export default Contact;
