# City Explorer

**Author**: Hasnaa Al-Habahbeh
**Version**: 1.0.0 <!--(increment the patch/fix version number if you make more commits past your first submission)-->

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

### Steps of implementing Feature .1 - Location Explore:

1. Sign-up to LocationIQ API.
2. Store the access token you got by signing up to LocationIQ in an .env file.
3. Create two components: a search form component and a location component. In the *search form* component, create a form that contains a text type input for the city name and a submit button. In the *location component*, create the elements you want to display the results in.
4. In App.js component, do the following:
    1. initialize the state.
    2. create a `handleLocation` method to store the user's inputted city name, this method should be passed to the search form component and used as an `onChange` callback for the text input form control.
    3. create a `handleSubmit` method to create a request from the API, this method contains the following:
        1. An object that specifies the request type (method property) and endpoint (baseURL property).
        2. Pass that object to the **axios** method to make a GET request to the LocationIQ API. Since this is an asynchronous function, we will use `.then()` and a callback to get back all of the response data.
        This callback takes one parameter which will be having the response. You can check it using `console.log(res)` and `console.log(res.data)`.
        3. Set the state with the new values retrieved by the GET request.
    The `handleSubmit` will be passed the search form component and used as an `onSubmit` callback in the form tag.
    4. create a `handleSubmit` method to clear the screen. This method should be passed to the search form component and used as an `onClick` callback for the clear button.



## Architecture

* React
* React Bootstrap
* CSS
* LocationIQ API
* Axios

## Change Log

12-09-2021 4:30pm - Application now has a location explore functionality, with a GET route for the location resource.

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

## Features

### Feature .1 - Location Explore

Estimate of time needed to complete: 2 hours
Start time: 2:45 pm
Finish time: 4:30 pm
Actual time needed to complete: 1 hour and 45 minutes

### Feature .2 - 

Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete: 