const server = Bun.serve({
    port: 8080,
    fetch(request) {
      return new Response("Hello, World!");
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);