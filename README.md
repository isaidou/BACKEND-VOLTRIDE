# BACKEND-VOLTRIDE

## Getting Started

Follow these steps to set up your NestJS application from the provided boilerplate:

### Clone Repository

```bash
git clone https://github.com/isaidou/BACKEND-VOLTRIDE.git
```

### Setup Environment Variables

Navigate to the cloned directory and copy the environment file:

```bash
cd my-app/
cp env-example-relational .env
```

Edit `.env` to update the following configurations:

```env
DATABASE_HOST=localhost
MAIL_HOST=localhost
```

### Start Required Docker Containers

Run the necessary services using Docker:

```bash
docker compose up -d postgres adminer maildev
```

### Install Dependencies

Install all required Node.js dependencies:

```bash
npm install
```

### Configure the App (Only for Initial Setup)

Run this command only once, when initializing your project. Skip it for subsequent setups.

```bash
npm run app:config
```

### Run Database Migrations

Migrate database schema:

```bash
npm run migration:run
```

### Seed the Database

Populate the database with initial data:

```bash
npm run seed:run:relational
```

### Start the Application in Development Mode

Run the application:

```bash
npm run start:dev
```

Open your browser and visit:

[http://localhost:3000](http://localhost:3000)

Your NestJS application is now ready!