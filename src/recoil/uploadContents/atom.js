import { atom } from "recoil";

const uploadContentsState = atom({
  key: "uploadContentsState",
  default: {
    name: "",
    hashtags: [],
  },
});

export default uploadContentsState;
