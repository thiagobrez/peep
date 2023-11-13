import { create } from 'zustand';
import { RootTabParamList } from '../navigation';

interface SubRouteStore {
  subRoute: keyof RootTabParamList;
  setSubRoute: (subRoute: keyof RootTabParamList) => void;
}

const useSession = create<SubRouteStore>()(set => ({
  subRoute: 'Drafts',
  setSubRoute: subRoute => set(() => ({ subRoute })),
}));

export default useSession;
