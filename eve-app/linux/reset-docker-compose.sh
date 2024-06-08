#!/bin/bash
sudo docker compose down -v
sudo docker compose down --rmi all
sudo docker volume prune -f
sudo docker image prune -a -f
sudo docker compose up --build

echo 'Reset..!'
