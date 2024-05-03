import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicComponent = dynamic(
  () => import("../modules/Authentication/LoginPage"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false, 
  }
);

export default function Home() {
  return <DynamicComponent />;
}
