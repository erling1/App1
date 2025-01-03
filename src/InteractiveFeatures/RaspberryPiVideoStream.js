import { React, useState, useEffect } from "react";


function GetLiveStream(){

    fetch("https://www.example.org")
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({

      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log("done", done);
              controller.close();
              return;
            }


            //do the dosomethingwithstream() proccesing here





            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })

  function dosomethingwithstream(){

    //this needs to be called ....look up (inside the readablestream)







  }
    return(
        <div className="Window">
            <streamwindow>

            </streamwindow>



        </div>
    )




}