docker ps -a
# docker rm id
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
docker exec -it mongodb bash

5d568e020c5e731ef5a967f3