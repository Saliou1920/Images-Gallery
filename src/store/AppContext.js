import { createContext } from "react";

const Appcontext = createContext({ loggedIn: false, user: {} });

export default Appcontext;
