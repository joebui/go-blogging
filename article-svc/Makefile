GO_DIR=cmd/server/*.go
BIN_FILE=bin/article-svc
MIGRATIONS_DIR=db/migrations

tidy:
	go mod tidy

start: tidy
	air

debug: tidy build
	dlv exec ./bin/article-svc --headless --api-version=2 --log --listen=0.0.0.0:2345

protoc:
	protoc ./proto/*.proto \
		--go_out=plugins=grpc:pb \
		--go_opt=paths=source_relative \
		--proto_path=proto

build: tidy
	go build -o $(BIN_FILE) $(GO_DIR)

db_up:
	cd $(MIGRATIONS_DIR) && ./up.sh

db_down:
	cd $(MIGRATIONS_DIR) && ./down.sh
