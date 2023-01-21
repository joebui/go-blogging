#!/usr/bin/env bash

set -x
set -o errexit
set -o nounset
set -o pipefail

SQL_PATH=$(realpath sql)

migrate -source file://$SQL_PATH/ -database $POSTGRES_URL down -all
