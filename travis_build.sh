#!/bin/bash
docker build -t kweb .
docker run -p 80:8080 -d kweb
ping localhost -c 10