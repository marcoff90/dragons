nx lint dragons-api
nx format:write
npx sequelize-cli db:seed --env users --seed 20221105111000-demo-users.js
npx sequelize-cli db:seed --env development --seed 20221102173500-teams.js
npx sequelize-cli db:seed --env development --seed 20221102172500-dragons.js
npx sequelize-cli db:seed --env development --seed 20221102172000-species.js
npx sequelize-cli db:seed --env development --seed 20221102171500-classes.js
npx sequelize-cli db:migrate --env orders --from 20221105110000-create-users.js
npx sequelize-cli db:migrate --env users --from 20221102163000-create-team-images.js --to 20221105110000-create-users.js
npx sequelize-cli db:migrate --env development --to 20221102163000-create-team-images.js
