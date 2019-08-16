docker ps -a
# docker rm id
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
docker exec -it mongodb bash