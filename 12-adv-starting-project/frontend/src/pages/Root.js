import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <h3>loading...</h3>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
