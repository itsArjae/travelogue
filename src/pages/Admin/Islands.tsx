
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
    () => import("../../modules/Admin/Islands"),
    {
      loading: () => <div>Loading...</div>,
      ssr: false, 
    }
  );

const Islands = () => {
    return <DynamicComponent />
}

export default Islands;