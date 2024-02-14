const cache = {};
const cacheDuration = 6 * 1000; // Cache duration in milliseconds (1 minute)

function cachingMiddleware(req, res, next) {
  const key = req.originalUrl; // Using the request URL as the cache key

  // Check if the response is cached
  if (cache[key] && Date.now() - cache[key].timestamp < cacheDuration) {
    console.log(`Cache hit for ${key}`);
    res.send(cache[key].data); // Return cached response
  } else {
    console.log(`Cache miss for ${key}`);
    // Override res.send to cache the response before sending it
    const originalSend = res.send;
    res.send = function(data) {
      cache[key] = { data, timestamp: Date.now() }; // Cache the response
      originalSend.call(this, data); // Call the original res.send method
    };
    next(); // Move to the next middleware or route handler
  }
}

export default cachingMiddleware;
