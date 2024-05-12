import { ReactNode } from "react";
import { PageProps } from "./page";

export default function Home({}: PageProps): ReactNode {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" contentEditable>
      <div className={""}>
        <Card></Card>
      </div>
    </main>
  );
}
