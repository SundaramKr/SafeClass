# SafeClass
Submission for ROBOHackIT 2022
##Project Theme
**Betterment of Online Education**

## Inspiration
- Online learning came as a boon to the students who were unable to attend normal school due to the pandemic.
- But since there are two sides to a coin, the boon soon became a curse when students started taking advantage of this method by bunking classes.
- Classes are made to impart knowledge to students, but students due to their fragile nature, started cheating the system. By keeping the classes running as a background task, most of the students chose to play games or watch videos during their class. 

## What it does
- Safe Class is a platform to prevent bunking in online classes held via Zoom by securing it with tab change detection and terminating the student's session once he/she crosses the click off limit.
- The students enters his **Name**, **e-mail**(optional), **Meeting Number** and **Meeting Password** to join the class.
- Once the entries are validated, the student is presented with an anti-bunk page which houses the zoom meeting of the student and prevents bunking of any kind.
- The total number of warnings a student is allowed is 3. **"Warns"** are given on detecting a tab or a window change. After crossing 3 warns, the session termination screen rolls in.
- The platform also keeps track of how long the student takes to return to the site after each "Warn". If the student takes **more than 5 minutes to return**, the session termination screen rolls in.
- Once a session has been terminated, the student won't be able to rejoin the class even if he reloads or goes back.
- During the session, within intervals of 10 minutes, the camera of the student's device will take a snap of the attendee. These will be used to determine whether the student is actually attending the class or not.
- On crossing 3 warns or taking more than 5 minutes to return to the platform, the student's name and email are sent to the respective coordinator in a **"guilty list"**.
- The list of students is presented to the coordinator in a .csv file for ease of viewing.
- The shots of the students who were caught bunking will be shared with the coordinator in the same "guilty list" in base64 format.

##Additional Features
- On entering the Zoom meeting, the students will be shown a **"Custom Instructions"** pop-up.
- It instructs the students on the steps to follow if they are stuck on a particular screen.
- These instructions are meant to guide the students during a class and can be customized as per the request of the coordinator.
- Once in the Zoom meeting, the students will be needed to attend the class in a Full-Screen mode.
- The Full-Screen Mode is forced as it prevents the students from getting distracted during their classes.

##Tackling the Workarounds
- The students attending the class through our platform will be visible to the coordinator, thereby, preventing student using the default Zoom App.
- The coordinator can view such students just by clicking on the top left Apps icon of their Zoom Meeting.
- Even if a student disables JavaScript for the website, they won't be able to attend the meeting.
- The warn counter is not stored in any Session or Local storage which prevents students from changing it.

##Use of echo3D and Twilio
- In order to help teachers and students understand the features of the platform, a demo video was needed for each feature.
- Adding videos for each feature would not only clutter up the home page but also increase the page load times, thereby, worsening the SEO.
- **Echo3D** helps the user get a demo video just by scanning a 400-500kB QR Code which is presented to the user in a separate pop-up once they opt to see it in the **Features** section of the home page.
- **Twilio** plays an important part of the website as the teachers/coordinators are sent the **"guilt list"** in a .csv file via SMS/e-mail/(any platform of their choice) using the Twilio API.

## How we built it
1. **HTML, CSS and BOOTSTRAP** - For making a clean, responsive and beautiful UI/UX.
2. **JAVASCRIPT** - Plays the most important part as it forms the main anti-bunk tech.
3. **NETLIFY FORMS** - Manages the Database of the students in the **"guilty list"**.
4. **ZOOM SDK** - Classes are held via this in the browser itself.
5. **ECHO3D** - Helps the user understand the platform better.
6. **TWILIO** - Used to communicate with the teachers/coordinators.

## Challenges we ran into
- Holding the Zoom Class in a browser.
- Preventing the workarounds in the anti-bunk tech.
- Making the website simple to understand for even the not-so tech savvy audience.
- Incorporating videos was increasing the load-times heavily and affecting the SEO.
- Communicating with the client (teachers/coordinators) in a smooth manner.

## Accomplishments that we're proud of
- **The main aim while making this was to keep it simple for the teachers using it. By using a combination of the already established Zoom platform and Twilio, the process of incorporating Safe Class in a normal online class has never been easier.**
- **The UI of the platform is not only responsive but also beautiful with the addition of AOS Library and Bootstrap CSS. The background is a beautiful texture which is not only easy-on-the-eyes but also gives the user a premium experience.**
- Every feature required to secure an online class is already built into the platform, thereby, preventing the hassle of adding other Zoom Apps.
- The warning based session termination system makes bunking classes impossible for the students and the platform also prevents crafty students from using workarounds.

## What we learned
- By testing the platform with a sample space of 30 students, problems which a creator wouldn't notice came to light.
- The workarounds which were tackled earlier was a result of this experiment.
- Making the platform easy-to-use for first time users who may or may not be well versed in technology.
- Students, especially teenagers, have a fickle mind and are easily distracted by their mobile phones, social media and games.
- Due to the advent of 60 second videos, the attention span of our generation has drastically reduced.
- Even though freedom is important, disciplining the students in their early stages is important as well.

##Business Model and Viability of Safe Class
- **Our USP - The only platform which provides this anti-bunk service for online classes and is completely automated instead of relying on human invigilators.**
- The revenue model for Safe Class makes it a profitable venture as none of the anti-bunk tech is dependent on human labor.
- The plans of Safe Class are listed on the [link](https://safeclass.ml/services).
- Most the work on the work on the platform has been automated making it a sustainable model as well.
- At present, Zoom has approximately **300-350 Million Daily Meeting Participants**. Even if a minute percent of the total users using Zoom for classes and webinars start using Safe Class, **the annual turnover could be in millions**.

## What's next for Safe Class
1. Reaching out to schools and teachers to facilitate them with our tech.
2. Providing a platform where not only Zoom but other meeting platforms like Google Meet and Microsoft Teams are also supported.
3. Making it a 100% automatic business model.
4. Adding multi-language support and a chatbot to help teachers and students who might face difficulties while using the platform.
