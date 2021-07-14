// import { animalsConfig } from "./wordsConfigs/animals";
import { campingConfig } from "./wordsConfigs/camping";
import { ecologyConfig } from "./wordsConfigs/ecology";
import { farmConfig } from "./wordsConfigs/farm";
import { foodConfig } from "./wordsConfigs/food";
import { fruitsConfig } from "./wordsConfigs/fruits";
import { houseConfig } from "./wordsConfigs/house";
import { transportConfig } from "./wordsConfigs/transport";

// export const createTableWords = (): string => (`
//   CREATE TABLE words(
//       id varchar(50),
//       name varchar(50),
//       translation varchar(50),
//       imageUrl varchar(255),
//       soundUrl varchar(255),
//       category_id varchar(50),
//       PRIMARY KEY(id),
//       CONSTRAINT fk_category
//         FOREIGN KEY(category_id)
//         REFERENCES categories(id)
//   );
// `);
//
// export const insertIntoWords = (): string => (`
//   INSERT INTO words(id, name, translation, imageurl, soundurl, category_id)
//     VALUES ${animalsConfig.join(',')},
//       ${campingConfig.join(',')},
//       ${ecologyConfig.join(',')},
//       ${farmConfig.join(',')},
//       ${foodConfig.join(',')},
//       ${fruitsConfig.join(',')},
//       ${houseConfig.join(',')},
//       ${transportConfig.join(',')};
// `);