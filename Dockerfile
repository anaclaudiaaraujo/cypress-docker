# Dockerfile

FROM cypress/included:latest

WORKDIR /e2e

COPY . .

CMD ["cypress", "run"]