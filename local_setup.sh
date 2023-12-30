#!/bin/sh

set -euo pipefail
set -x

make up
sleep 3
make db_setup
docker ps
