# Ginterest

This project is a Pinterest clone built using Next.js, PostgreSQL, and Tailwind CSS. It aims to replicate the core functionalities of Pinterest, including user authentication, image uploads, and board creation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, log in, log out)
- Image uploads
- Board creation and management
- Responsive design

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API routes, PostgreSQL
- **DevOps**: Docker, Docker Compose

## Prerequisites

- Node.js
- Docker
- Docker Compose

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/pinterest-clone.git
    cd pinterest-clone
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables:

    Create a `.env.local` file in the root of the project and add the necessary environment variables:

    ```env
    DATABASE_URL=your_database_url_here
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4. Start the PostgreSQL database using Docker:

    Make sure to check the `Dockerfile` for configuration details.

    ```bash
    docker-compose up -d
    ```

5. Run the database migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

## Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note:** Ensure you have Docker and Docker Compose installed on your system. You can start the database server by running:

```bash
docker-compose up -d

