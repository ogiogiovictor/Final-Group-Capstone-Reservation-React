# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

# 📖 [Rentomotors] <a name="Rentomotors"></a>

> Rentomotors is an app that enables users to reserve cars for their personal benefits for a certain period of time.

## Images

![image](https://user-images.githubusercontent.com/77974883/215064710-20f37924-716a-44b1-b0ba-dc6581502f53.png)
![image](https://user-images.githubusercontent.com/77974883/215064959-3d5a3381-d982-4338-aa9b-6aca97503b0d.png)
![image](https://user-images.githubusercontent.com/77974883/215065024-d02ecc0b-5b47-4b05-8cef-5fdbf5285af2.png)
![image](https://user-images.githubusercontent.com/77974883/215065087-3561ddcf-8602-4f1a-9fd0-f4d63ca01a1c.png)
![image](https://user-images.githubusercontent.com/77974883/215065178-88e814e0-688a-4e71-814e-1d261f3cdae8.png)

## Links

- [React Frontend of this app](https://github.com/ogiogiovictor/Final-Group-Capstone-Reservation-React)
- [Api Documentation](https://rento-api.onrender.com/api-docs/index.html)

## 🛠 Built With <a name="built-with"></a>

- Ruby
- Rails
- Gem
- React
- postgresql
- rswag

### Tech Stack <a name="tech-stack"></a>

> This project was built using as major staks the following:

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

> A user can login into the app after being authorized.
> A user can see add and delete cars.
> A user can reserve on or many of the cars in the app.

- **[MVC]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### User login details

Username: JohnVictorFed
User Email: John@home.com

In order to run, you need to install RUBY and Rails in your computer.

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

Make sure you have installed locally:
Ruby 
Nodejs

<!--
Example command:

```sh
 gem install rails
```
 -->

### Setup

Clone the back-end portion of the project from this repository to your desired folder : git clone https://github.com/ogiogiovictor/Final-Group-Capstone-Reservation-Rails

Execute on console making sure you are in the correct directory:
```sh
bundle install
npm i
```

-create a file named application.yml under config folder and write the following Variables:
```sh
USER_NAME = “xxx” (xxx replace with your Postgres user name)
PASSWORD = “xxx” (xxx replace with your Postgres password)
```
-On console execute
```sh
rails db:create
rails db:migrate
rails db:seed
```

-Create Master key:
```sh
EDITOR="mate --wait" bin/rails credentials:edit
```
```sh
rails s
```

clone the front-end portion from this repository to your destination folder: git clone https://github.com/ogiogiovictor/Final-Group-Capstone-Reservation-React

Navigate to correct directory:

Add Dependencies
```sh
npm i
```

```sh
npm start
```
when asked for a new port for local host type "y"

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing
You may test by executing:

rspec ./spec/models

rspec ./spec/requests

rails rswag   

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API documentation

- [Api Documentation](https://rento-api.onrender.com/api-docs/index.html)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Ogiogio Victor**

- GitHub: [@githubhandle](https://github.com/ogiogiovictor)
- Twitter: [@twitterhandle](https://twitter.com/ogiogiovictor)
- LinkedIn: [LinkedIn](https://linkedin.com/in/ogiogiovictor)

👤 **Omachi John**

- GitHub: [@Mromaci](https://github.com/mromachi)
- Twitter: [@mr_omachi](https://twitter.com/mr_omachi)
- LinkedIn: [John Omachi](https://www.linkedin.com/in/johnomachi/)

👤 **Silva Fernando César da**

- GitHub: [@fernando-silvabr66](https://github.com/fernando-silvabr66)
- Twitter: [@fsilvabr1](https://twitter.com/fsilvabr1)
- LinkedIn: [https://linkedin.com/in/fernando-silvabr66](https://linkedin.com/in/fernando-silvabr66) 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **[Authentication]**
- **[CRUD]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ogiogiovictor/Final-Group-Capstone-Reservation-Rails/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> leave a star if you enjoyed the project.

If you like this project star the project and leave a star

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> This project was built and developed around the UI idea of [Murat Korkmaz](https://www.behance.net/muratk) on [Creative Commons license of the design](https://creativecommons.org/licenses/by-nc/4.0/)

> We would like to thank Microverse.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
