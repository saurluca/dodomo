#!/bin/bash

source ../.env

# Commands
RESTART_COMMAND="sudo systemctl restart nginx"

echo "Starting to update website..."
cd "${LOCAL_FOLDER_PATH}" || exit
npm run build
echo "Pushing to server..."
scp -r dist/* "${SERVER_USERNAME}"@"${SERVER_IP}":"${SERVER_FOLDER_PATH}"
echo "Restarting nginx..."
# shellcheck disable=SC2029
ssh "${USERNAME}"@"${SERVER_IP}" "${RESTART_COMMAND}"
echo "Updated website successfully"
