#!/usr/bin/env bash

set -x
set -euo pipefail

SQL_PATH=$(realpath sql)

migrate -source file://$SQL_PATH/ -database $POSTGRES_URL down -all
