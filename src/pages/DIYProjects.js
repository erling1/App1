import React from 'react';
import '../CSS/DIYProjects.css';  // Add your styling for the DIYProjects page

function DIYProjects() {
  return (
    <div className="projects-container">
      <h1>My DIY Projects</h1>
      
      {/* Project 1: Raspberry Pi Pico LED Project */}
      <div className="project">
        <h2>Project 1: Raspberry Pi Pico LED Light</h2>
        <p>
          This project involves using a Raspberry Pi Pico to control an LED light bulb. 
          The idea is to explore basic electronic components and connect them to the Pi using jumper wires. 
          I'll start by making a simple circuit to turn on and off an LED light.
        </p>
        <h3>Materials Needed:</h3>
        <ul>
          <li>Raspberry Pi Pico</li>
          <li>Jumper wires</li>
          <li>LED light bulb</li>
          <li>Micro USB cable (to connect to computer)</li>
        </ul>
        <h3>Next Steps:</h3>
        <p>
          - Set up Raspberry Pi Pico with the computer using Micro USB.<br />
          - Connect the LED to the Pi using jumper wires.<br />
          - Write a simple script to toggle the LED on and off.
        </p>
      </div>

      {/* Project 2: Raspberry Pi Plant Moisture Monitor */}
      <div className="project">
        <h2>Project 2: Raspberry Pi Plant Moisture Monitor</h2>
        <p>
          In this project, I will use a Raspberry Pi with Wi-Fi capability to monitor the moisture level of my plant. 
          The goal is to automate watering based on soil moisture readings. I will use a moisture sensor to monitor the soil, 
          and if the moisture level is too high or too low, I'll trigger an automatic watering system. 
        </p>
        <h3>Materials Needed:</h3>
        <ul>
          <li>Raspberry Pi with Wi-Fi (e.g., Raspberry Pi 4 or Raspberry Pi Zero W)</li>
          <li>Moisture sensor</li>
          <li>Jumper wires (for connecting the moisture sensor to the Pi)</li>
          <li>Relay or solenoid valve (for automatic watering)</li>
        </ul>
        <h3>Suggestions for the Raspberry Pi:</h3>
        <ul>
          <li>Raspberry Pi 4 (Has Wi-Fi built-in and great performance for any tasks)</li>
          <li>Raspberry Pi Zero W (More affordable and also has Wi-Fi capability)</li>
        </ul>
        <h3>Next Steps:</h3>
        <p>
          - Connect the moisture sensor to the Raspberry Pi using jumper wires.<br />
          - Write a custom script to monitor soil moisture and activate the watering system when necessary.<br />
          - Plan out how to trigger the watering system (e.g., using a relay to control a pump or valve).
        </p>
      </div>

      {/* Project 3: Bus Departure Screen */}
      <div className="project">
        <h2>Project 3: Bus Departure Screen</h2>
        <p>
          For this project, I plan to use a small screen (e.g., an OLED display or similar) connected to a Raspberry Pi 
          to show the departure times for the local bus that I take from Furuset Station. This will involve pulling live data 
          from an API that provides the bus schedule and displaying the times on the screen.
        </p>
        <h3>Materials Needed:</h3>
        <ul>
          <li>Small screen (OLED or TFT screen)</li>
          <li>Raspberry Pi (any model with a display output)</li>
          <li>Jumper wires</li>
        </ul>
        <h3>Next Steps:</h3>
        <p>
          - Choose a suitable display screen and connect it to the Raspberry Pi.<br />
          - Use the Ruter API that provides bus departure times.<br />
          - Write a script to fetch data from the API and display the relevant bus schedule information on the screen.
        </p>
      </div>
      
    </div>
  );
}

export default DIYProjects;
