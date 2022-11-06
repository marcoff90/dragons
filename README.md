# Dragons Api

ABOUT BACKEND

- "e-commerce" like project with dragons
- the project is build with Apollo Server Gateway and Subgraphs
- services

  - dragons-api
    - data of all dragons
    - possible queries
      - dragons
        - input for filtering
          - number of heads
          - species id
          - class id
        - limits
          - limit of records
          - offset of records
  - dragons-users-api
    - users data
    - simple service
      - user based on email and hashed password
      - after signUp/signIn generates JWT
    - mutations
      - signUp
        - input email, password, passwordConfirmation
      - signIn
        - input email, password
  - orders-api
    - handles orders of dragons
    - protected by auth middleware -> user must be authenticated
    - queries
      - order
        - input order id
      - orders
        - limits
          - limit of records
          - offset of records
    - mutations
      - create order
        - input
          - dragon id
          - amount
          - price of dragon

- to init the project
  - npm install
  - create .env according to .sample.env
  - initialize db for each service
    - npx sequelize-cli db:create --env (name of environment variable according to config in
      config/database/config)
    - migrate db
      - npx sequelize-cli db:migrate --env orders --from 20221105110000-create-users.js
      - npx sequelize-cli db:migrate --env users --from 20221102163000-create-team-images.js
        --to 20221105110000-create-users.js
      - npx sequelize-cli db:migrate --env development --to 20221102163000-create-team-images.js
    - seed db
      - npx sequelize-cli db:seed --env users --seed 20221105111000-demo-users.js
      - npx sequelize-cli db:seed --env development --seed 20221102173500-teams.js
      - npx sequelize-cli db:seed --env development --seed 20221102172500-dragons.js
      - npx sequelize-cli db:seed --env development --seed 20221102172000-species.js
      - npx sequelize-cli db:seed --env development --seed 20221102171500-classes.js
    - to run project nx run name-of-project:serve
  - use postman collection with queries or apollo studio
