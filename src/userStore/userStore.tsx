import axios from "axios";
import create from "zustand";
import getSign from "../helpers/getSign";

/* INTERFACE STORE */
interface IUser {
  user: {
    name: string;
    birthday: string;
    email: string;
    picture: any;
    gender: string;
    sign: string | undefined;
  };
  handlerName: (name: string) => void;
  handlerBirthday: (birthday: string) => void;
  handlerEmail: (email: string) => void;
  handlerGender: (gender: string) => void;
  handlerSign: (birthday: string) => void;
  getRandomPicture: () => void;
  resetUser: () => void;
}

/* STORE */
const useStore = create<IUser>((set) => ({
  user: {
    picture: {},
    name: "",
    birthday: "",
    email: "",
    gender: "",
    sign: "",
  },

  handlerName: (name) =>
    set((state) => ({ user: { ...state.user, name: name } })),

  handlerBirthday: (birthday) =>
    set((state) => ({ user: { ...state.user, birthday: birthday } })),

  handlerEmail: (email) =>
    set((state) => ({ user: { ...state.user, email: email } })),

  handlerGender: (gender) =>
    set((state) => ({ user: { ...state.user, gender: gender } })),

  handlerSign: (birthday) => {
    const birthdayDate = new Date(birthday);
    const signUser = getSign(birthdayDate.getDate(), birthdayDate.getMonth());
    set((state) => ({
      user: { ...state.user, sign: signUser },
    }));
  },

  getRandomPicture: async () => {
    const { data } = await axios.get("https://randomuser.me/api/?inc=picture");
    set((state) => ({
      user: { ...state.user, picture: data.results[0].picture.large },
    }));
  },

  resetUser: () =>
    set({
      user: {
        picture: {},
        name: "",
        birthday: "",
        email: "",
        gender: "",
        sign: "",
      },
    }),
}));

export default useStore;
