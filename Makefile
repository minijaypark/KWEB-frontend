REGISTRY := galadriel02:5000
NAME     := llab-yna
TAG      := $(shell git log -1 --pretty=%H)
IMG      := ${REGISTRY}/${NAME}:${TAG}
LATEST   := ${REGISTRY}/${NAME}:latest

build:
	@docker build -t ${IMG} .
	@docker tag ${IMG} ${LATEST}

push:
	@docker push ${REGISTRY}/${NAME}

.PHONY: *
