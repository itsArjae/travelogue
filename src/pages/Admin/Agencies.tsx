import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
    () => import("../../modules/Admin/AgenciesAdmin"),
    {
      loading: () => <div>Loading...</div>,
      ssr: false, 
    }
  );

const Agencies = () => {
    return <DynamicComponent />
}

export default Agencies;