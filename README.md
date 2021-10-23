# <b>Eyepatch</b>

![Eyepatch Room](https://github.com/mschien/eyepatch-client/blob/master/images/eyepatch1.png)
## Live Demo:
[https://mschien-eyepatch.surge.sh/](https://mschien-eyepatch.surge.sh/)

## User Flow:

- Creating an account / or signing in:
![Signup](https://github.com/mschien/eyepatch-client/blob/master/images/eyepatch6.png)
- Creating a room:
![Create Room](https://github.com/mschien/eyepatch-client/blob/master/images/eyepatch5.png)
- Joining a room:
![Rooms page](https://github.com/mschien/eyepatch-client/blob/master/images/eyepatch4.png)
- Adding search results to queue:
![Search](https://github.com/mschien/eyepatch-client/blob/master/images/eyepatch2.png)
- Playing videos in queue:
![Playing](https://github.com/mschien/eyepatch-client/blob/master/images/eyepatch3.png)

## Installation and Requirements

- Python 3
- Flask
- Postgresql Server

Execute the following command in a terminal to install all the required modules.

```
pip install -r requirements.txt
```

Additionally you will need Postgres installed and configured correctly, after install you must create an empty database for keymix.

```
psql -c "keymix" // from shell
CREATE DATABASE keymix; // from the psql console
```

Afterwards set the correct Flask environmental variable and run Flask.

```
export FLASK_APP=keymix
flask run
```

## <b>YouTube Player / Data API</b>

<b>Reference Docs for end points used in this app:</b>
-[https://developers.google.com/youtube/iframe_api_reference](https://developers.google.com/youtube/iframe_api_reference)
-[https://developers.google.com/youtube/v3](https://developers.google.com/youtube/v3)

## <b>Built With</b>

- React

- Node.js

- Express.js

- CSS3

- Bootstrap

- JS
