import { useContext } from "react";

import { MobXProviderContext } from "mobx-react";
import { IRootStore } from "src/store/RootStore";

const useStores: () => IRootStore = () =>
  useContext(MobXProviderContext) as IRootStore;

export default useStores;
