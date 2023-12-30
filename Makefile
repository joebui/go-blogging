up:
	docker compose up -d --remove-orphans

down:
	docker compose down

db_setup:
	docker exec gb-db psql -U postgres -c "CREATE DATABASE article_svc"
