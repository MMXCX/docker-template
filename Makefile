dev:
	docker-compose -f ./docker/docker-compose.dev.yml up -d --build
	docker image prune -f

prod:
	docker-compose -f ./docker/docker-compose.prod.yml up -d --build
	docker image prune -f

down:
	docker-compose -f ./docker/docker-compose.dev.yml down
	docker image prune -f