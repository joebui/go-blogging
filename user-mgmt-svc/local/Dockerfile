FROM golang:1.19.5-alpine

RUN apk update && apk add --no-cache protoc bash make
RUN go install github.com/golang/protobuf/protoc-gen-go@latest \
  && go install github.com/cosmtrek/air@latest \
  && go install github.com/go-delve/delve/cmd/dlv@latest \
  && go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

WORKDIR /app
