import NavLayout from "./NavLayout";

const AppLayout = ({ children }) => {
  return (
    <div>
      <NavLayout />
      {children}
    </div>
  );
};

export default AppLayout;
