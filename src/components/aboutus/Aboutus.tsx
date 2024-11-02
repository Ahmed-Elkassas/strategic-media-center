"use client";

import PageWrapper from "../PageWrapper";

export default function Aboutus() {
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
