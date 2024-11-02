import Sidebar from "./Sidebar";

interface PageWrapperProps {
  children: React.ReactNode;
  sidebarTitle: React.ReactNode;
  sidebarContent: React.ReactNode;
}

export default function PageWrapper({
  children,
  sidebarTitle,
  sidebarContent
}: PageWrapperProps) {
  return (
    <div className="container mx-auto mt-6 flex justify-between gap-4 mb-4 flex-grow">
      <main className="md:w-3/4">{children}</main>
      <Sidebar title={sidebarTitle} content={sidebarContent} />
    </div>
  );
}
