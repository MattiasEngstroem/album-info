import "./main.scss";

import { createSearchForm } from "./components/search-form/search-form";
import { releaseInfo } from "./components/release-info/release-info";
import { navbarListeners } from "./components/navbar/navbar";

createSearchForm();
releaseInfo("16807491");
navbarListeners();
