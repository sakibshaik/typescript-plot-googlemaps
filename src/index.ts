import { User } from "./User";
import {Company} from "./Company";
import {CustomMaps} from "./customMaps";

const user = new User();
const company = new Company()

const map = new CustomMaps('map')
map.addMarker(user)
map.addMarker(company)