FROM golang:1.17-alpine

WORKDIR /src

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

RUN go build -o /grpc_proxy

CMD ["/grpc_proxy"]