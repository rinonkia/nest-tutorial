up:
	docker compose up

down:
	docker compose down

login:
	docker compose exec db bash

login-db:
	docker compose exec db mysql -u tester -p nest_tutorial

prisma-migrate:
	docker compose run --rm nestjs npx prisma migrate dev

clean:
	docker compose down --rmi all --volumes