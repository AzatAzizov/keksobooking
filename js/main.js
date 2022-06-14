import { types, check_in, check_out, photos } from "./data.js";

import {
  getRandomAvatarId,
  getRandomDouble,
  getRandomInt,
  getRandomElementFromArray
} from "./utils.js";

const author = {
  avatar: "img/avatars/user" + getRandomAvatarId() + ".png",
};

const location = {
  lat: getRandomDouble(35.65, 35.7, 5),
  lng: getRandomDouble(139.7, 139.8, 5),
};

const offer = {
  title: "sentence title",
  address: `${location.lat}, ${location.lng}`,
  price: getRandomInt(1, 100),
  type: getRandomElementFromArray(types),
  rooms: getRandomInt(1, 5),
  guests: getRandomInt(1, 10),
  checkin: getRandomElementFromArray(check_in),
  checkout: getRandomElementFromArray(check_out),
  features: ["wifi", "dishwasher", "parking", "elevator", "conditioner"], // задание со *
  description: "room description",
  photos: photos,
};
