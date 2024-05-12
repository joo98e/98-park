import { ReactNode } from "react";

interface PageProps {}

export default function Home({}: PageProps): ReactNode {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" contentEditable>
      <div className={""}>
        <span>nin </span>
      </div>
    </main>
  );
}
