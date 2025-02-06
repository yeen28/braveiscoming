# Brave Is Coming
From egg to chicken, and then to brave.
(A project that clones the page https://eggiscoming.com/index.html)

## Requirements
- Java 17 or higher
- Gradle 8.12.1 (build tools)
- Database: MariaDB or MySQL

## Tech Stack
### Back-end
- Java 17 or higher
- Spring Boot 3.x or higher
- Gradle
- MariaDB or MySQL
- Spring Data JPA : ORM framework for interacting with the database
- Liquibase : Database schema version management

### Front-end
- Svelte

## Installation & Running
### 1. Clone the project
```bash
git clone https://github.com/yeen28/braveiscoming.git

# BE
cd braveiscoming/BE_braveiscoming

# FE
cd braveiscoming/FE_braveiscoming
```
### 2. Install dependencies
Using Gradle:
```bash
./gradlew build
```

### 3. Run the application
Using Gradle:
```bash
./gradlew bootRun
```

### 4. Database Configuration
Set up the database connection in ```src/main/resources/application.yml```.

**Example(MariaDB)**:
```yaml
spring:
  datasource:
    url: jdbc:mariadb://127.0.0.1:3306/braveiscoming
    driver-class-name: org.mariadb.jdbc.Driver
    username: ${DB_USERNAME:your_username}
    password: ${DB_PASSWORD:your_password}

    jpa:
      hibernate:
        ddl-auto: create
      properties:
        hibernate:
          dialect: org.hibernate.dialect.MariaDBDialect
```

## Contributing
To contribute to this project, please follow these steps:
1. Fork the project.
2. Work on a new branch.
3. Create a Pull Request when you're ready to merge your changes.

## License
MIT License

Copyright (c) 2025 yeeun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.