import create from "zustand";
import getSign from "../helpers/getSign";

/* INTERFACE STORE */
interface IUser {
  user: {
    name: string;
    birthday: string;
    email: string;
    sign: string | undefined;
  };
  handlerName: (name: string) => void;
  handlerBirthday: (birthday: string) => void;
  handlerEmail: (email: string) => void;
  handlerSign: (birthday: string) => void;
  resetUser: () => void;
}

const EMPTY_USER = {
  name: "",
  birthday: "",
  email: "",
  sign: "",
};

/* STORE */
const useStore = create<IUser>((set) => ({
  user: EMPTY_USER,

  handlerName: (name) =>
    set((state) => ({ user: { ...state.user, name: name } })),

  handlerBirthday: (birthday) =>
    set((state) => ({ user: { ...state.user, birthday: birthday } })),

  handlerEmail: (email) =>
    set((state) => ({ user: { ...state.user, email: email } })),

  handlerSign: (birthday) => {
    const birthdayDate = new Date(birthday);
    const signUser = getSign(birthdayDate.getDate(), birthdayDate.getMonth());
    set((state) => ({
      user: { ...state.user, sign: signUser },
    }));
  },

  resetUser: () => set({ user: EMPTY_USER }),
}));

export default useStore;
