# Project_G_83

Online Mess Service

Document:
System Requirement Specification Document

Title:
System Reqruiement Spefication for Online Mess Service System.

Team:
Direct Customer,Service Provider, Admin.

Objective (Purpose):
The online Mess Service System Web Applictaion is intended toprovide complete solution for Service provider and
Consumers through a single Gateway using internet.
The main objective of this project is to give a common platfom for the customers and service provider. This system will help consumers from various places to communicate with various providers(mess owners) and ease their searching efforts. The main
interest of the Project is to create a central service system that will act as a bridge between providers and consumers.




Scope:
•	Online Mess Service System is a web application.
•	There are mainly two types of users. One is the provider(Mess Owner) and the other is the consumer.
•	Consumers can search for mess menus, and special dishes at their convenience.
•	Mess owners can search for consumers available and their interests.
•	Online Mess Service System provides the functions which connect the consumers and the mess owners through the portal.
•	The online Mess Service System will be Administrated by Admin.


Functional Requirements :
Online Mess Service Portal consists of three modules named below.
1.	Consumer Module.
2.	Admin Module.
3.	Service Provider Module.


Consumer Module
•	The consumer can register and create his account.
•	Consumer can  choose service provider.
•	Consumers can browse existing mess according to their ratings.
•	A consumer can view their daily menus, rates, special dishes, and special offers for the day.
•	Consumers can compare various messes according to their ratings and prices respectively.
•	Consumer can give the feedback .
•	Users can notify Mess owners about (Lunch/Dinner) confirmation.
•	Customer will pay the bill.

Admin Module
•	Online Portal should provide all functions to admin on how to handle the System.
•	Admin will check for authorised mess.
•	Admin can review the feedbacks and ratings.
•	Admin can update/delete the service provider.

Service Provider Module
•	Mess Owner can register and create his account
•	Service Provider (users) to add/updates/delete daily menus.
•	Can see ratings and feedback given by consumers.
•	Owners can provide special offers for the day occasionally.
•	Mess owners will  register members for their mess.
•	Registered members of a particular mess will get the special dish.
•	Maintain payment related details for each customer.



NonFunctional Requirement:
Security:
  • Registered Customer will allowed to place an order.	
  • Each stakeholder will be to access system through authentication process. Who are you?
  • System will provide access to the content, operations using Role based security (Authorization) (Permissions based on Role)
  • Using SSL in all transactions which will be performed stakeholder. It would protect confidential information Shared by stakeholder to system and vice versa.
  • System will automatically log out all stakeholder after some time due to inactiveness.
  • System will block operations for inactive stakeholder and would redirect for authentication.
  • System will internally maintain secure communication channel between Servers (Web Servers, App Servers, database Server)
  • Sensitive data will be always encrypted across communication.
  • User proper firewall to protect servers from outside fishing, vulnerable attacks.

Reliability:
  • The system will backup business data on regular basis and recover in short time duration to keep system operational
  • Continuous updates are maintained, continuous Administration is done to keep system operational.
  • During peak hours system will maintain same user experience by using load balancing.



Maintainability:
  • A Commercial database software will be used to maintain System data Persistence. 
  • A readymade Web Server will be installed to host online mess service (Web Site) to manage server capabilities.
  • Staff will easily monitor and configure System using administrative tools provided by Servers.
  • Separate environment will be maintained for system for isolation in production, testing, and development.
Portability:
  • System will provide portable User Interface (HTML, CSS, JS) through which users will be able to access online mess service.
  • System can be deployed to single server, multi-server, to any OS, Cloud (Azure or AWS or GCP)

Availability:
  • uptime:   24* 7 available 99.999%
Accessibility:
  • Only registered customer will be able to place an order after authentication.
  • Vendors will be able to maintain a menu and can reject or approve orders.
  • Staff will be able to view daily, weekly, monthly, annual business Growth through customized dashboard.
Durability:
  • System will implement backup and recovery for retaining stakeholders’ data, business operation data and business data over time.
Efficiency:
  • On Festival season, maximum number of users will place order, view available mess services with same response time.
  • System will be able to manage all transactions with isolation.
Modularity:
  • System will designed and developed using reusable, independent or dependent business scenarios in the form of modules.
  • These modules will be loosely coupled and highly cohesive.
  • System will contain login, registration, menu,order processing, payment processing, membership and Roles management modules.	
Scalability:
• System will be able to provide consistent user experience to stakeholder as well as visitors irrespective of load.
Safety:
  • Its functionalities are protected from outside with proper firewall configuration.
  • Business data will be backed up periodically to ensure safety of data using incremental back up strategy.
  • Role based security will be applied for Application data and operations accessibility.

