# Frontend Tasks

## Steps to install and run
1. `yarn install` 
2. `yarn start`
3. In order for frontend please ensure API is running `localhost:5000`. If not frontend will not display expected results

## Questions and Assumptions
- Some of the API calls return '<img src='' onerror='alert(7)'/>', should we extract this?
- Used a single global state to manage state for entire application.
- Used React's Context API, did not use Redux or other popular state management.
- For the variable it was a bit unclear what the fully intented design was for them.

## Given more time
- Would like to be able to handle events on 'search' a bit better 
- Create more child components
- Write more extensive unit tests
- Add more error cases (e.g. failing to connect to the API)
- Would could chunk the amount of titles coming back from API as this would be a good idea if we had thousands of titles to show. This would require changes on frontend and API
- Commit to GitHub in multiple pull requests/push vs. one single push.