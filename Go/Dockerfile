# First stage: build the Go application
FROM golang:1.19-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod ./

# Download all dependencies
RUN go mod download

# Copy the source code into the container
COPY . .

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o hello-fullcycle .

# Second stage: create a minimal image with the compiled Go binary
FROM scratch

# Copy the binary from the builder stage
COPY --from=builder /app/hello-fullcycle .

# Command to run the binary
CMD ["./hello-fullcycle"]
