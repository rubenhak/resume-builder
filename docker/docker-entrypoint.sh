#!/bin/sh

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

        MY_OTHER_ARGS="${PLUGIN_OTHER_ARGS}"
        MY_IS_DEBUG="${PLUGIN_IS_DEBUG}"

    elif isTrue "$GITHUB_ACTIONS"
    then
        echo "Running in GitHub Actions..."

        MY_OTHER_ARGS="${INPUT_OTHER_ARGS}"
        MY_IS_DEBUG="${INPUT_IS_DEBUG}"

    else  
        echo "Unknown CI Run..."

        MY_OTHER_ARGS=""
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


    if [[ ! -z "${MY_OTHER_ARGS}" ]]
    then
        MY_CMD="${MY_CMD} ${MY_OTHER_ARGS}"
    fi

    log "RUNNING: ${MY_CMD}"
else
    MY_CMD="${MY_CMD} $@"
fi

${MY_CMD}