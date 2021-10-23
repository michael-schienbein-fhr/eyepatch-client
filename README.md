# <b>KEYmix</b>

![Keymix Homepage](https://github.com/fact0/capstoneOne/blob/master/keymixhome.jpg?raw=true)
## Live Demo:
[https://mschien-eyepatch.surge.sh/](https://mschien-eyepatch.surge.sh/)

## User Flow:

- Creating an account
![Signin](https://github.com/ggomesneto/globetrotter-heroku/blob/main/readme-pictures/Signin.png)
- Updating the profile
![Profile](https://github.com/ggomesneto/globetrotter-heroku/blob/main/readme-pictures/Profile.png)
- Creating a trip
![Trip](https://github.com/ggomesneto/globetrotter-heroku/blob/main/readme-pictures/Trip.png)
- Adding places on the trip
![Places](https://github.com/ggomesneto/globetrotter-heroku/blob/main/readme-pictures/Places.png)
- Sharing the trip map with friends
- ![Places](https://github.com/ggomesneto/globetrotter-heroku/blob/main/readme-pictures/map.png)

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

## <b>Spotify API</b>

<b>Reference Docs for end points used in this app:
[https://api.spotify.com/v1/](https://developer.spotify.com/documentation/web-api/reference/)

## <b>Built With</b>

- Python

- Flask

- HTML

- CSS

- Bulma

- JS

- jQuery