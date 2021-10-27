# 1. Introduction (20% - Max 2 Pages)
## 1.1 Overview and justification
## 1.2 Project Scope
## 1.3 System Description

# 2. Solution Requirements (50% - Max 10 Pages)

## 2.1 Functional Requirements
- Map will show user how to get from two given locations using audio and visual effects
- Map will be able to interpret language and answer questions like 'where is the car park from here'
- Map must utilise AI to answer questions

|Id Type and Title|FR 1.0 Use of visual effect to guide user between locations|
|---|---|
|Description       |The application will provide a GUI such that a user can easily understand where the map is                       guiding them.<br> -Using Arrows <br> -Using topdown map view highlighted path
|Priority          |High|
|Must Should Could |Must have|
|Dependencies      |N/A|
|Expected results  |The visual guide should be universal and understandable for a user of any language or intelligence|
|Exception handling |N/A|

|Id Type and Title|FR 1.1 use of audio effect to guide user between locations.|
|---|---|
|Description       |The application will provide audio to guide user between locations.|
|Priority          |Medium|
|Must Should Could |should|
|Dependencies      |FR 1.0|
|Expected results  |When a user has confirmed a route to travel on the application will provide audio queues <br>                     such that the user can accurately travel between locations with only audio queue.|
|Exception handling |Example|

|Id Type and Title|FR 2 Use of AI to process user input|
|---|---|
|Description       |A user can use speech input to start a route e.g. take me to the car park. This will be <br>                     processed by an AI using natural language processing and then the route will be started.|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |FR 3|
|Expected results |When a user inputs speech to the application it will be processed quickly and the application <br> will provide a route relevant to the given audio input.|
|Exception handling  |When a user provides irrelevant audio input e.g. what is the weather today the application  <br>                will warn user that input is invalid.<br><br>If the user requests a route to a building that doesn't exist e.g. "Where is the church" <br> the application will provide an output like cannot find building "church".|

|Id Type and Title|FR 3 User inputting audio data|
|---|---|
|Description       |The user will be able to input speech as audio and the application will be able to pass this audio to AI.|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |FR 1.0|
|Expected results  |The application will be able to identify user audio input device and record audio when user <br> begins to request a route.|
|Exception handling |User might not have microphone or broken microphone. Generate relevant error for user|
## 2.2 Non-Functional Requirements

- Map should be accessible to all possible clients (Web app)
- Application must be portable (should be able to be ran on mobile devices)

- Privacy
  - User location data wont be saved
## 2.3 Risks and Issues
saving user location data
possibly send user to wrong place if not robust
# 3. Project Development (20% - Max 2 Pages)
## 3.1 Development Approach
## 3.2 Project Schedule

**The final 10% of marks are for writing skills and clarity of the document**
