import { useState } from "react";
import AuthenticatedLayout from "./AuthenticatedLayout";
import UnAuthenticatedLayout from "./UnAuthenticatedLayout";

interface Props {
  children: React.ReactNode;
}

const AppLayout = (props: Props) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return isAuthenticated ? (
    <AuthenticatedLayout>{children}</AuthenticatedLayout>
  ) : (
    <UnAuthenticatedLayout>{children}</UnAuthenticatedLayout>
  );

};

export default AppLayout;
