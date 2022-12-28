# BUG-ROBOT-Frontend
The front-end implementation of simple game using React.js and Material UI.
You Can see the back-end part [here](https://github.com/nejadipour/BUG-ROBOT-Backend).

## Run Locally
Clone the project
```
git clone git@github.com:nejadipour/BUG-ROBOT-Frontend.git
```
Go to the project directory
```
cd BUG-ROBOT-Frontend
```
Install dependecies
```
npm install
```
or
```
yarn install
```
To run locally
```
npm start
```
or
```
yarn start
```
This will run the on port 3000.

## Guide

![image](https://user-images.githubusercontent.com/78561069/209824040-fe32023b-9ce6-4b6a-ac63-f8dc4c1329b6.png)

### Create Board
By clicking on the [+ CREATE BOARD] button, you will see a form that asks you the parameters of the board.

![image](https://user-images.githubusercontent.com/78561069/209822361-75310f3d-d0d8-46e8-b301-43afba013526.png)

### Add Card
You can select a card from the list at the right. Until the card is selected, you can add to the locations that are empty

![image](https://user-images.githubusercontent.com/78561069/209824256-73d467d5-08b7-4bc7-961c-1114341e0dd4.png)

### Move Card
After selecting one of the squares, choose the destination position and it will move if the destination is not occupied and close.

![image](https://user-images.githubusercontent.com/78561069/209824899-323506c2-a1d1-444b-a9f6-b6fb95fa731f.png)

    point:
    You can't move bugs, only robots can be moved.
    The distance should not be more than the robot's strength.
    Moving is only possibe in right-left or bottom-top directions.

### Attack
Whenever You select a robot, the "ATTACK" button will be enabled for you. By pressing this button all the bugs around the robot will be removed

![image](https://user-images.githubusercontent.com/78561069/209825285-17fe7e0b-d300-40d1-9461-3e3f8e4efa03.png)
