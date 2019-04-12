# bmw-demo-app

## Build the app
`docker build -t bmw-demo-app .`

## Start it up
`docker run -d -p 8081:8081 --name bmw-demo-app bmw-demo-app`

## Create a production build
`docker build -t docker.iteratec.io/bmw/bmw-demo-app .`

# Push to Artifactory
`docker push docker.iteratec.io/bmw/bmw-demo-app:latest`

## Watch it live on stage
Have a look at [localhost:8081](localhost:8081)!
