#!/bin/bash
set -euo pipefail

MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

cd ${MY_DIR}
source version.sh

jq '.version = "'${PRODUCT_VERSION}'"' package.json > package-temp.json
mv package-temp.json package.json

npm publish

./prepare-docker.sh

docker tag yaml-resume-builder rubenhak/yaml-resume-builder:${PRODUCT_VERSION}
docker tag yaml-resume-builder rubenhak/yaml-resume-builder:latest

docker push rubenhak/yaml-resume-builder:${PRODUCT_VERSION}
docker push rubenhak/yaml-resume-builder:latest