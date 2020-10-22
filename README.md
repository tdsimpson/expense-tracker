## About The Project
A web app to track your expenses over time visualize them with interactive charts and graphs

Try it out online: https://tds-expense-tracker.herokuapp.com/

Demo video: https://www.youtube.com/watch?v=VPtTarety28&t=161s

<img src="images/landing-page.png" height=200px> <img src="images/bar-graph.png" height=200px> 
<img src="images/expense-list.png" height=270px><img src="images/pie-chart.png" height=270px>

### Built With
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Firebase](https://firebase.google.com/)

<!-- GETTING STARTED -->
## Getting Started

### Installation 
Clone the github repository.
```
git clone https://github.com/tdsimpson/expense-tracker.git
```

Install the dependencies.
```
yarn install
```

### Firebase Setup

1. Go to the [Firebase console](https://console.firebase.google.com/u/0/) and create a new databse

2. Go Project Overview and create a new web app.

3. Copy the congif keys to the clipboard

4. Create an ```.env.test``` file in the root directory

5. Paste them in to the corresponding keys in the following format:
```
FIREBASE_API_KEY=[your key]
FIREBASE_API_KEY=[your key]
FIREBASE_AUTH_DOMAIN=[your key]
FIREBASE_DATABASE_URL=[your key]
FIREBASE_PROJECT_ID=[your key]
FIREBASE_STORAGE_BUCKET=[your key]
FIREBASE_MESSAGING_SENDER_ID=[your key]
FIREBASE_APP_ID=[your key]


```

### Run the development server

```
yarn run dev-server
```

The project should run on PORT 8080
