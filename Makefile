up:
	docker compose up

down:
	docker compose down

login:
	docker compose exec db bash

login-db:
	docker compose exec db mysql -u tester -p nest_tutorial

clean:
	docker compose down --rmi all --volumes