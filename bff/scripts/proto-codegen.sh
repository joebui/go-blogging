#!/bin/sh

set -euo pipefail
set -x

ARTICLE_PROTO_FILE=proto/article_svc.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src --grpc_out=grpc_js:./src ./$ARTICLE_PROTO_FILE
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./src/proto -I proto ./$ARTICLE_PROTO_FILE
