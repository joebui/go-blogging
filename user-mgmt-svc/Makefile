GO_DIR=cmd/server/*.go
BIN_FILE=bin/user-mgmt-svc
MIGRATIONS_DIR=db/migrations
PB_DIR=pb

tidy:
	go mod tidy

start:
	air

protoc:
	protoc ./proto/*.proto \
		--go_out=plugins=grpc:pb \
		--go_opt=paths=source_relative \
		--proto_path=proto

build:
	go build -o $(BIN_FILE) $(GO_DIR)

debug:
	go build -o $(BIN_FILE) $(GO_DIR)
	dlv --listen=:2345 --headless=true --log=true --accept-multiclient --api-version=2 exec $(BIN_FILE)

db_up:
	cd $(MIGRATIONS_DIR) && ./up.sh

db_down:
	cd $(MIGRATIONS_DIR) && ./down.sh
