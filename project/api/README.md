# API Documentation

## 1. Prerequisits

This project requires the use of IBM Cloud, in particular the use of [Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text)
to process audio input sent to the server by the user. To fully use this API, 
you will need an IBM Cloud account with an instance of the Speech to Text
service running, as  well as the relevant URL and API Key. 

You will need to create a file called `credentials.json`, and fill it in with
these details. An example of this can be seen below. This file should be 
stored in the `projects/api` directory.

```json
{
    "API_KEY": "YOUR API KEY",
    "STT_URL": "Your URL"
}
```

## 2. API Endpoints

### 2.1 `GET /`

This endpoint has no parameters and will return the main page of the 
application.

### 2.2 `GET /search/<start>/<end>`

The `/search` route takes two url encoded parameters, `<start>` and `<end>`
and will carry out Dijkstra's algorithm to find the shortest path between
the two of them. both `<start>` and `<end>` need to be stored in the 
database of hospital rooms. If either parameter is not found, the route
will return a 404 response. If `<start>` and `<end>` are found in the 
database, an array containing each room ID will be sent back in the 
order of the shortest path between `<start>` and `<end>`. 

#### 2.2.1 Example Request

`127.0.0.1/search/Pharmacy/X-Ray`

#### 2.2.2 Example Response

<!-- Change to be the actual response for this query-->
`[40, 58, 59, 57]`


### 2.3 `POST /audio`

This endpoint is there to send a binary audio encoding to the server.
That audio will then be sent to the IBM Cloud Speech to Text service
to get a transcript of the recording. This transcript is then parsed
to find the start and end points of the route, which is then redirected
to the `/search/<start>/<end>` endpoint mentioned in section 2.2 to generate
the shortest path between the two points in the graph. 

#### 2.3.1 Example Request

`127.0.0.1/audio`

#### 2.3.2 Example Response

<!-- Change to be the actual response for this query-->
`[40, 58, 59, 57]`


### 2.4 `POST /update`

This request is there to update values in the database. The new values
should be sent in JSON format, then sent to the SQLite database in the 
same directory as the API. 
