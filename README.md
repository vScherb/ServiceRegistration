# ServiceRegistration
Registration service for the other services

# Start the container
Start container detached.
```Bash
docker-compose up -d
```

This will run the mongoDb and dependend on that the serviceregistration will be build and run.

# Examples

## Valid request to extend the services
```Bash
curl -X POST -d '{"title":"Service A", "url": "http://localhost/api", "service": "serviceregistration", "version": 1}' -H "Content-Type: application/json" http://localhost/api/new
```

## View the result (may add more services)
```Bash
curl -X POST -d '{ "title": "Invalid object for a service" }' -H "Content-Type: application/json" http://localhost/api/new
```

