#!/bin/bash
set -euo pipefail

MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

cd ${MY_DIR}

source version.sh

rm -rf *.tgz

./build.sh

npm pack

mv yaml-resume-builder-${PRODUCT_VERSION}.tgz yaml-resume-builder.tgz

docker build -t yaml-resume-builder --build-arg PRODUCT_VERSION=${PRODUCT_VERSION} --progress=plain .