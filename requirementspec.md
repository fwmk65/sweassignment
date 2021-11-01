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

|Id Type and Title|FR 4.0 Allow for system admin login |
|---|---|
|Description       |The application must have a feature for a system admin to login via username and password|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |N/A|
|Expected results  |The application must have a seperate area for system admin users to login. <br> This area must be only accessed by system admins and therefore should be protected <br> by a username and password system.|
|Exception handling ||

|Id Type and Title|FR 4.1 Admin login Security |
|---|---|
|Description       |The application will have securities in place to avoid a non admin user accessing the admin account.|
|Priority          |High|
|Must Should Could |Should|
|Dependencies      |FR 4.0|
|Expected results  |The Admin login system should have securities such as locking login attempts after too many incorrect attempts.<br>|
|Exception handling |Its possible for the real system admin to get the password wrong a few times. <br>So a system in place to unlock the admin login will have to be put in place|

|Id Type and Title|FR 5 Admin editing locations.|
|---|---|
|Description       |Using a GUI an admin should be able to edit locations including the name, location, function.|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |FR 4|
|Expected results  |An admin should be able to access a separate section where they have access to the map data. <br>They should be able to edit it including location, function and names of rooms, as well as information about walkways between rooms.|
|Exception handling |Timeouts would have to be handled gracefully i.e. letting the admin know the task wasn't successful. <br>Authentication for the admin|


|Id Type and Title|FR6 System must function without the need for user account or additional user information|
|---|---|
|Description       |The application needs to be accessible to as many people as possible with ease.<br> Removing the need for a user account or providing more information e.g. email address encourages this idea.|
|Priority          |Medium|
|Must Should Could |should|
|Dependencies      |N/A|
|Expected results  |When the user starts the application it will be fully functional <br> without need for a user to create an account or provide more information.|
|Exception handling |N/A|



## 2.2 Non-Functional Requirements

|Type and Title        |Security Requirement Handling of user location data|
|---|| 
|Metrics      |Data flow diagrams in design stage to ensure data is treated correctly |
|Security     |The application will never permanantly save user location data |
|Constraints  |Follow GDPR compliance | 

|Type and Title        |Availability Requirement |
|---|| 
|Metrics      |Application will be available on IOS, Android and as a web app   | 
|Security     |? |
|Constraints  |Use of react native in development to ease multiplatform portability| 


- Map should be accessible to all possible clients (Web app)

- Application must be portable (should be able to be ran on mobile devices)

- Privacy
  - User location data wont be saved

- Information and directions should not be vague so as to not send users to the wrong location
## 2.3 Risks and Issues
- Storing data on the user could possibly violate GDPR
  - Make data Handling GDPR compliant

- Make sure database is robust as the whole systen relies on it
  - Use regular backups in case of any error

- Misuse of the admin section could result in many issues e.g. incorrect locations or inappropriate names being shown to users.
  - Make access to admin section robust e.g. 2FA

# 3. Project Development (20% - Max 2 Pages)
## 3.1 Development Approach
## 3.2 Project Schedule

**The final 10% of marks are for writing skills and clarity of the document**
