#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

source ${MY_DIR}/configuration.sh

export LOG_TO_FILE=false
export NODE_ENV=development
export LOG_LEVEL=info

node ${MY_DIR} $@

EXIT_CODE=$?
echo "EXIT CODE: $EXIT_CODE"
exit $EXIT_CODE