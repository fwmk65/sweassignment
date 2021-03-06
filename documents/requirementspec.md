# 1 – Introduction 

## 1.1 – Overview and Justification 

When you enter a hospital, do you ever pause and think, “where do I go now” ?. It’s a common problem nowadays and despite the significant technological progress at its pace, the DRI building infrastructure is outdated, which led to the dissatisfaction of many onsite visitors and patients because they are getting lost due to it being hard to navigate through. Thus, resulting in diverting hospital resources from their primary mission of delivering quality care to patients. Therefore, a web app with an intelligent map called the DRI indoor navigation that is easily updatable with audio and visual effects was proposed, where its main purpose is to show and help viewers get through the DRI building from point A to point B on the map efficiently with no human-interaction. In this report, the project scope and system description were presented to identify the project boundaries such as purpose and vision, where a detailed overview of the system was given with research of other systems. In addition, the solution requirements were split into three sections. Firstly, functional requirements that describes the system functions and models such as a map with GUI for the user to understand where the map is guiding him, AI to process user input, user inputting audio data and system admin login and editing locations. Secondly, Non-functional requirements to identify the quality of the system such as platform availability (available on IOS  & android), handling user location data to ensure security, loading speed of the map to ensure high performance and handling a large amount of user simultaneously. Thirdly, risk and issues that the system will face. Finally, the project development was separated into two section Development approach that discusses the SDLC approach and project schedule, which identifies the deadlines for each key aspect of the project.

## 1.2 – Project Scope 

 In this project, two main problems were encountered, which are the physical site being incredibly complicated to navigate due to it being made up from buildings dating back over a century to modern buildings and since, the start of COVID many features, and functions of the hospital have changes in locations to accommodate COVID treatment. Therefore, the DRI indoor navigation was presented, to help the users such as the patients, employees, onsite visitors navigate through mazes of the DRI building and across rooms, upstairs, downstairs and in consideration of disabilities by taking the shortest path and also allowing the IBM team to update it easily without disturbing them. while also resolving the concerns of lost patients and onsite visitors. In addition, the DRI hospital doesn’t need to inform the patients, employees, and onsite visitors of its room changes due to it being available immediately on the virtual map. Thus, resulting in the IBM team getting people where they need to go saves time and resources, keeps healthcare provider schedule in check, and improves patient satisfaction. In other words, the DRI indoor navigation purpose is to make the visit to the DRI hospital more friendly in such a way that the patients, visitors, and employees can go everywhere effortlessly. Moreover, many features could be added to DRI indoor navigation to make the process of visiting a hospital partially automated such as including a communication system for patients and doctors, and the option to schedule appointments, receiving medical scans and prescription, heat maps and appointment reminders. Hence, turning it to an organizer of the hospital services instead of only navigating people around.
 
 ## 1.3 - System Description 
 
 In this project, the DRI indoor navigation was designed as a responsive web app with audio and visual effects. The audio effect is constructed using AI that helps the users communicate with the web app map to specify their destination based on their needs, where the audio by the user is taken as the input and the output is the directions given by A* algorithm also known as the best-first search since, it’s an informed search algorithm that is formulated in terms of weighted graphs starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost. Moreover, the visual effect was implemented so that the user can visualise his journey and drop the pin on the room he is heading to with audio assistance for directions. In addition, the DRI indoor navigation is easily updatable while functioning (direction features) through storing the graph data in a database and updating it with SQL including creating, removing, and renaming the buildings, where the admin (IBM Team) only accesses it and gets the new data with an HTML form. The web app consists of a frontend and a backend page, where the fronted page is designed using React Native that shows a map of the DRI building provided by the IBM team with a pin to the user’s location (How?) and an input bar for the user to either type or state his new destination using the audio feature and visualize his path on the map with directions assistance. In the backend page A* algorithm is used to connect the rooms in the building as nodes, where they are extracted from the IBM API’s using Python Flask and the IBM enterprise AI suite is used to help the machine learn from past experiences, which makes it function while updating the data of the map. As we move forward, and become more reliant on technology, old buildings such as hospitals will have to come up to speed too. Virtual mapping will continue to revolutionise the way we interact with our indoor environments like GPS did for the outdoor world. Since, mapping technology can create accurate and up to date real-world experience maps of highly complex and often unconnected environments. Thus, resulting in the NHS hospitals investing in its software by implementing BuzzStreets indoor navigation app, where it uses Bluetooth low energy beacons, WI-FI signals, and Earth’s magnetic field to pinpoint a person’s location. Furthermore, research was made by consultancy firm Deloitte Digital found more than 85% of patients ask for directions when they go to a hospital or other public health facility, and 30% of first-time visitors get lost, which means implementing such a system would save time and money by helping visitors get to appointments on time and staff spend less time giving directions. 

# 2. Solution Requirements (50% - Max 10 Pages)

## 2.1 Functional Requirements
- Map will show user how to get from two given locations using audio and visual effects
- Map will be able to interpret language and answer questions like 'where is the car park from here'
- Map must utilise AI to answer questions

|ID Type and Title|FR 1.0 Use of visual effect to guide user between locations|
|---|---|
|Description       |The application will provide a GUI such that a user can easily understand where the map is                       guiding them.<br> - Using Arrows <br> - Using topdown map view highlighted path
|Priority          |High|
|Must Should Could |Must have|
|Dependencies      |N/A|
|Expected results  |The visual guide should be universal and understandable for a user of any language or intelligence|
|Exception handling |N/A|

|ID Type and Title|FR 1.1 use of audio effect to guide user between locations.|
|---|---|
|Description       |The application will provide audio to guide user between locations.|
|Priority          |Medium|
|Must Should Could |should|
|Dependencies      |FR 1.0|
|Expected results  |When a user has confirmed a route to travel on the application will provide audio queues <br>                     such that the user can accurately travel between locations with only audio queue.|
|Exception handling |Example|

|ID Type and Title|FR 2 Use of AI to process user input|
|---|---|
|Description       |A user can use speech input to start a route e.g. "take me to the car park". This will be <br>                     processed by an AI using natural language processing and then the route will be started.|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |FR 3|
|Expected results |When a user inputs speech to the application it will be processed quickly and the application <br> will provide a route relevant to the given audio input.|
|Exception handling  |When a user provides irrelevant audio input e.g. what is the weather today the application  <br>                will warn user that input is invalid.<br><br>If the user requests a route to a building that doesn't exist e.g. "Where is the church" <br> the application will provide an output like cannot find building "church".|

|ID Type and Title|FR 3 User inputting audio data|
|---|---|
|Description       |The user will be able to input speech as audio and the application will be able to pass this audio to AI.|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |FR 1.0|
|Expected results  |The application will be able to identify user audio input device and record audio when user <br> begins to request a route.|
|Exception handling |User might not have microphone or broken microphone. Generate relevant error for user|

|ID Type and Title|FR 4.0 Allow for system admin login |
|---|---|
|Description       |The application must have a feature for a system admin to login via username and password|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |N/A|
|Expected results  |The application must have a seperate area for system admin users to login. <br> This area must be only accessed by system admins and therefore should be protected <br> by a username and password system.|
|Exception handling ||

|ID Type and Title|FR 4.1 Admin login Security |
|---|---|
|Description       |The application will have securities in place to avoid a non admin user accessing the admin account.|
|Priority          |High|
|Must Should Could |Should|
|Dependencies      |FR 4.0|
|Expected results  |The Admin login system should have securities such as locking login attempts after too many incorrect attempts.<br>|
|Exception handling |Its possible for the real system admin to get the password wrong a few times. <br>So a system in place to unlock the admin login will have to be put in place|

|ID Type and Title|FR 5 Admin editing locations.|
|---|---|
|Description       |Using a GUI an admin should be able to edit locations including the name, location, function.|
|Priority          |High|
|Must Should Could |Must|
|Dependencies      |FR 4|
|Expected results  |An admin should be able to access a separate section where they have access to the map data. <br>They should be able to edit it including location, function and names of rooms, as well as information about walkways between rooms.|
|Exception handling |Timeouts would have to be handled gracefully i.e. letting the admin know the task wasn't successful. <br>Authentication for the admin|


|ID Type and Title|FR6 System must function without the need for user account or additional user information|
|---|---|
|Description       |The application needs to be accessible to as many people as possible with ease.<br> Removing the need for a user account or providing more information e.g. email address encourages this idea.|
|Priority          |Medium|
|Must Should Could |should|
|Dependencies      |N/A|
|Expected results  |When the user starts the application it will be fully functional <br> without need for a user to create an account or provide more information.|
|Exception handling |N/A|



## 2.2 Non-Functional Requirements

|Type and Title|Availability Requirement Platform availability|
|---|---|
|Metrics       | Application will be available on IOS, Android and as a web app|
|Security      | N/A|
|Constraints   | Use of react native in development to ease multiplatform portability|

|Type and Title|Security Requirement Handling of user location data|
|---|---|
|Metrics       | Data flow diagrams in design stage to ensure data is treated correctly|
|Security      | The application will never permanantly save user location data|
|Constraints   | Follow GDPR compliance|


|Type and Title|Peformance Requirement Loading Intelligent map speeds|
|---|---|
|Metrics       | The map should have an average load time under 3 seconds <br>across a range of different hardware|
|Security      | Use of polynomial time algorithms when implementing map system|
|Constraints   | N/A|

|Type and Title|System should be able to handle a large amount of users at once|
|---|---|
|Metrics       |The application should keep fast loading times with more then <br>200 concurrent users |
|Security      |Minimise the amount of computation on the backend of<br> the application |
|Constraints   | N/A |


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

### Communication Issues:

1. The group members come from different cultural backgrounds, which may cause disagreements
2. Poor communication with customers
3. The progress will be complicated later than expected
4. In the middle of development, it was discovered that there were errors in the basic items that were originally confirmed from the beginning, which caused the entire project to be overthrown and restarted.

### Technical issues:

5. The expected functions cannot fully/partially meet the expected requirements
6. The program cannot cope with emergencies
7. The program cannot cope with the consequences of human operations, such as administrator errors, etc.

| Number | Priority | Loss | Prabability |
| ---- | ----   | ---- | ---- |
| 1    | High   | It at least delays the delivery, or even fails the project. | High probability, but will not lead to the worst in general. |
| 2    | Medium | This will lead to errors between expectations and the project, and untimely communication may waste time and effort. | Medium probability. |
| 3    | Medium | Reduce the customer's rating of the project team, and disrupt the global plan. | High probability |
| 4    | Medium | It takes a lot of time and energy to correct the direction of the project. | Low probability |
| 5 | Low | The completion of the project does not meet customer requirements. | Medium probability |
| 6 | Low | The project cannot complete the task requirements under any circumstances. | Low probability |
| 7 | Low | The project may collapse under human intervention. | Medium probability |

 ### Cope with the risk

1. Establish communication channels (via Github, Whats app, etc.) to clarify the work that each team member needs to do and the deadline for completion. Timely discover and mediate disputes and disagreements within the team.
2. By appointing the person in charge to contact the customer regularly (via e-mail, Trello, etc.) to ensure that the development of the project meets the requirements of the customer's expectations.
3. Develop an effective time schedule (note that, leave a certain buffer space for each item that needs to be processed or completed) and change the time schedule accordingly when the time, technology, personnel, and other conditions change.
4. It is necessary to clarify the purpose and development route in a timely manner in the early stage of the project, and maintain a smooth communication route with customers and instructors.
5. Communicate with the customer clearly to disambiguate, understand what needs to be changed or added, and then take remedial measures afterwards.
6. By adding tests that simulate on-line running to verify the actual running results and simulate various unexpected scenarios for the project to verify the robustness. And need to do a considerable degree of research on the environment of customer needs.
7. Ask the customer about the docking environment, and simulate the modification of the data under the administrator operation scenario, and limit certain administrator and user permissions based on the simulation results.

  Various situations that may arise in the test should be taken into consideration in the establishment of the project

# 3. Project Development (20% - Max 2 Pages)

## 3.1 Development Approach

The development approach we have chosen to use is scrum development. The decision to go for an
agile approach to development was made to reflect the changes that can happen at different points throughout the 
project, like the COVID-19 situation affecting how people will move around the hospital or the DRI requesting more
features further down the line. The workflow will involve our teammates being assigned a job to work on for the week
and the team will meet at least once a week in the assigned practical session to discuss progress and move people
around to different tasks where appropriate. This prorgress will be recorded on a Trello board and in our GitHub 
repository and meetings with the client will be arranged to discuss progress or changes. We can keep this workflow 
for the whole project.  

This workflow is useful for a few reasons. The first is that it gives us flexibility to accomodate features 
and changing requirements in the future, as well as giving us time to work around full student schedules. This 
development approach is also much more suitable than the Waterfall approach since we know that parts of the project
are subject to change, so a full waterfall approach where we analyse, design, code and test will take a long time and
changing requirements will hurt our development and lead to wasted time. 

## 3.2 Project Schedule

**The final 10% of marks are for writing skills and clarity of the document**
