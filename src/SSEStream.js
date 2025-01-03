//Copied from Medium

import { EventSourceParserStream } from 'eventsource-parser/stream';

export async function* parseSSEStream(stream) {
  const sseStream = stream
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())
  
  for await (const chunk of sseStream) {

    console.log('SSE Raw Chunk:', chunk); // Log the raw chunk before processing
    if (chunk && chunk.event) {
      console.log('Event:', chunk.event); // Log the event type
    }
    if (chunk && chunk.data) {
      console.log('Data:', chunk.data); // Log the data part
    }
    if (chunk && chunk.type) {
      console.log('Chunk type:', chunk.type); // Log the chunk type
    }

    if (chunk && chunk.type === 'event') {
      console.log('SSE Data:', chunk.data); // Log the actual data if it’s an event
      yield chunk.data;  // Yield the data part
    } else {
      console.log('Invalid chunk or missing type:', chunk);
    }
  
    
    yield chunk.data
  }
}