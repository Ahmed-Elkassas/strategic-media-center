"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";
import PageWrapper from "../PageWrapper";
import * as pdfjs from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Aboutus() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to the first page
  };

  const goToNextPage = () =>
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  const goToPrevPage = () =>
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <PageWrapper
      sidebarContent={
        <ul className="mt-4">
          <li className="mb-2">أخبار المركز</li>
          <li className="mb-2">أخبار المركز</li>
        </ul>
      }
      sidebarTitle="Subscription Agreement"
    >
      <p>من نحن</p>
      {/* <div className="container mx-auto p-4">
        <h2 className="text-center font-bold text-2xl mb-6">
          إتفاقية الإشتراك في خدمات المركز
        </h2>
        <div className="pdf-container bg-gray-100 p-4 rounded-md shadow-lg">
          <Document
            file="/pdf/first-look.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p className="text-center mt-4">
            الصفحة {pageNumber} من {numPages}
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
              السابق
            </button>
            <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
              التالي
            </button>
          </div>
        </div>
      </div> */}
    </PageWrapper>
  );
}
