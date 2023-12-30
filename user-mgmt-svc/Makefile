GO_DIR=cmd/server/*.go
BIN_FILE=bin/user-mgmt-svc
MIGRATIONS_DIR=db/migrations
PB_DIR=pb

tidy:
	go mod tidy

start: tidy db_up
	air

debug: tidy build
	dlv exec ./bin/article-svc --headless --api-version=2 --log --listen=0.0.0.0:2345

protoc:
	protoc ./api/proto/*.proto \
		--go_out=plugins=grpc:api/grpc \
		--go_opt=paths=source_relative \
		--proto_path=api/proto

build: tidy
	go build -o $(BIN_FILE) $(GO_DIR)

db_up:
	cd $(MIGRATIONS_DIR) && ./up.sh

db_down:
	cd $(MIGRATIONS_DIR) && ./down.sh
