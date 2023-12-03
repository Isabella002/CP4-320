/** 
 Name: Isabella Mester
 Date: November 30, 2023
 Description: This is the JavaScript for the Bored API webpage that will fetch data
 from a bored api and incorporate it into my webpage to come up with things to do 
 when you are bored. Used in CP3.
 **/

 "use strict";

document.addEventListener("DOMContentLoaded", () => {
    fetchRandomActivity();
    fetchActivities(); // Fetch activities from the new web service
});

async function fetchRandomActivity() {
    try {
        const response = await fetch('http://localhost:3000/api/activities');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data); // For testing, check the console for fetched data
        // Process or display activities as needed
    } catch (error) {
        handleError(error);
    }
}

