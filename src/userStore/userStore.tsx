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

/* STORE */
const useStore = create<IUser>((set) => ({
  user: {
    name: "",
    birthday: "",
    email: "",
    sign: "",
  },

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

  resetUser: () =>
    set({
      user: {
        name: "",
        birthday: "",
        email: "",
        sign: "",
      },
    }),
}));

export default useStore;
