import { Account, Avatars, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setProject("6936d44b001599c5429e")
  .setPlatform("dev.rectus.shelfie");

export const account = new Account(client);
export const avatar = new Avatars(client);
export const databases = new Databases(client);
