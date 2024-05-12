import { ReactNode } from "react";
import Card from "@/common/ui/components/card/Card";

interface PageProps {}

export default function Home({}: PageProps): ReactNode {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={""}>
        <Card>안녕하세요?</Card>
      </div>
    </main>
  );
}
