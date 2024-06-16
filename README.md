Objectives: The primary objective of this project is to efficiently configure, provision, and monitor Node.js applications, ensuring their smooth deployment, scalability, and observability, while adhering to modern best practices and technologies. 

This project is about Dockerizing a Nodejs-application and orchestra/ng using Kubernetes Minikube cluster and monitoring Minikube Nodejs using Prometheus and Grafana. This can be achieved in following steps. 

Now here is the roadmap of the enitre project. 

Dockerize the Nodejs application: • Created configuration files (e.g., JSON and YAML) to Dockerize the Nodejs application. Created working directory called “nodeapp_capstoneproject” by using below mkdir command: 
- mkdir capstone_project 

In the same directory below files are placed to create a Nodejs application image. 
	Dockerfile 
	index.cjs 
	package-lock.json 
	package.json 
	test 
	test.cjs

 •	Creating the Nodejs Application - 

![image](https://github.com/Neel9626/capstone-project/assets/155722558/6960d613-8532-4af3-9206-d64b61fa905a)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/eb144201-5133-4d9c-acbf-0df1f8b481f6)

•	Structuring the API - 

![image](https://github.com/Neel9626/capstone-project/assets/155722558/0c8b0888-596c-40ac-b33a-2a7b0139acd7)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/4a206f04-aec1-48b9-a167-3957e9acf4de)


![image](https://github.com/Neel9626/capstone-project/assets/155722558/9dbd95d6-82b9-48f9-9da2-3cca618dd08d)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/d246f60a-4189-4c25-bb79-05a1c99d35ac)

•	Dockerfile -  

![image](https://github.com/Neel9626/capstone-project/assets/155722558/5c2fc67e-8f3e-4dfa-81ce-5a4856c54291)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/417c63e0-fce1-4883-a0ed-455aa6f25b93)

•	Code - 

![image](https://github.com/Neel9626/capstone-project/assets/155722558/07714205-493c-4873-961b-0153b0df83be)

•	Creating the Docker Container - 

![image](https://github.com/Neel9626/capstone-project/assets/155722558/5cb37f87-1400-4e5a-b399-319794def216)

•	Application code updated in the terminal – 

![image](https://github.com/Neel9626/capstone-project/assets/155722558/9b2d03a8-de4c-4365-b65c-e028f48914a9)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/60b47760-dc77-4d6e-9348-472897f8dc5a)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/b48e064c-538b-40a1-9a00-b5c9f18a1df5)

Installing Kubernetes : 
•	Installed and configured Minikube for local Kubernetes cluster provisioning. 
•	Verified the Minikube installation by using the Minikube status command

![image](https://github.com/Neel9626/capstone-project/assets/155722558/e510ee69-9314-4832-9fe5-464fd2ced594)

Setting the Minikube on the Nodejs application that I have already built – 

•	Developed Kubernetes below YAML files for deploying the Node.js application and by using Kubectl apply -f commands to deployed the yaml files to orchestrate the Nodejs application. 

•	Deployed the application to the Minikube cluster using Kubectl apply -f deployment.yml

![image](https://github.com/Neel9626/capstone-project/assets/155722558/9c57b92b-d876-4df3-86c7-8960303e5e1e)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/e4a35c84-5a42-4f89-adb6-dd69014a04f5)

 Now the Final product of the Nodejs Application after the installation of Minikube – 

![image](https://github.com/Neel9626/capstone-project/assets/155722558/48f6c1e2-1c59-46c7-a2c4-bc3464fc4f0f)

![image](https://github.com/Neel9626/capstone-project/assets/155722558/5966e5ba-3fdf-4a34-96d2-f71365f1798e)
