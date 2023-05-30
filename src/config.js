import {
  BABYPAGE,
  BOYPAGE,
  CATALOGPAGE,
  GIRLPAGE,
  TODDLER_BOYPAGE,
  TODDLER_GIRLPAGE,
} from "./paths/paths";

export const CONFIG = {
  HEADER_CONFIG: [
    { id: 1, title: "Catalog", year: "", route: CATALOGPAGE },
    { id: 2, title: "Baby", year: "(0-4y)", route: BABYPAGE },
    { id: 3, title: "Toddler Girl", year: "(4-7y)", route: TODDLER_GIRLPAGE },
    { id: 4, title: "Toddler Boy", year: "(4-7y)", route: TODDLER_BOYPAGE },
    { id: 5, title: "Girl", year: "(8-14y)", route: GIRLPAGE },
    { id: 6, title: "Boy", year: "(8-14y)", route: BOYPAGE },
  ],
};
