import React, { FC } from "react";

type ILayout = {
  children: any;
};

const Layout: FC<ILayout> = (props) => {
  const { children } = props;
  return (
    <div>
   
      {children}
    </div>
  );
};

export default Layout;
