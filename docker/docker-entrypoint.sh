#!/bin/bash

log() {
   echo "[RESUME-DOCKER] $1"
}

getListArg() {
   echo "$1" | tr ',' ' '
}

isTrue() {
  [[ "$1" == "true" ]]
}

# MAIN

MY_CMD="yaml-resume-builder"

if isTrue "${CI}"
then

    if isTrue "$DRONE"
    then
        echo "Running in Drone..."

        MY_BUILD_ARGS="${PLUGIN_BUILD_ARGS}"
        MY_IS_DEBUG="${PLUGIN_IS_DEBUG}"

    elif isTrue "$GITHUB_ACTIONS"
    then
        echo "Running in GitHub Actions..."

        MY_BUILD_ARGS="${INPUT_BUILD_ARGS}"
        MY_IS_DEBUG="${INPUT_IS_DEBUG}"

    else  
        echo "Unknown CI Run..."

        MY_BUILD_ARGS=""
        MY_IS_DEBUG=""
    fi  

    if isTrue "${MY_IS_DEBUG}"
    then
        echo "CURRENT DIRECTORY: "
        pwd
        echo "---"

        echo "CONTENTS: "
        ls -la
        echo "---"    
    fi

    if [[ ! -z "${MY_BUILD_ARGS}" ]]
    then
        MY_CMD="${MY_CMD} ${MY_BUILD_ARGS}"
    fi

    log "RUNNING: ${MY_CMD}"
else
    MY_CMD="${MY_CMD} $@"
fi

${MY_CMD}