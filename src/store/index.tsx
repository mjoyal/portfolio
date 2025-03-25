import React, { useState } from "react";

import { Provider } from "mobx-react";
import RootStore from "./RootStore";

const StoreProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  const [rootStore] = useState(() => RootStore.create());

  return <Provider {...{ rootStore, ...rootStore }}>{children}</Provider>;
};

export default StoreProvider;
