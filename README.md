npx sequelize-cli db:create
npx sequelize-cli db:migrate --env development
npx sequelize-cli db:seed
nx lint dragons-api
nx format:write
