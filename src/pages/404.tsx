import React from "react";

import { NextSeo } from "next-seo";

import { ErrorPage } from "src/components/index";

function NotFound() {
  return (
    <>
      <NextSeo title="404" description="404 Not Found" />
      <ErrorPage
        errorCode={404}
        title="öhm öhm Sayfa Bulunamadı"
        description="miyav"
      />
    </>
  );
}

export default NotFound;
