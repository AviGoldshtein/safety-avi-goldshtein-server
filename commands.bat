@REM network
docker network create mynet

@REM postgres
docker run --name pg --network=mynet -e POSTGRES_PASSWORD=password -e POSTGRES_USER=postgres -e POSTGRES_DB=mydb -p 5432:5432 -d postgres

@REM visualization with dbeaver
docker run -d --name dbeaver --network=mynet -p 8978:8978 dbeaver/cloudbeaver:latest
