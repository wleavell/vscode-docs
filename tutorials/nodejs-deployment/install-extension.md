---
Order: 3
TOCTitle: Install the Azure App Service Extension
PageTitle: Install the Azure App Service Extension
MetaDescription:
MetaSocialImage:
DateApproved: 10/5/2017
ShortDescription:
---
# Install the Azure App Service Extension

The [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) lets you quickly create, manage, and deploy sites on [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/).

> <a class="tutorial-install-extension-btn" href="vscode:extension/ms-azuretools.vscode-azureappservice">Install the Azure App Service extension</a>

Make sure you reload VS Code after installing the extension!

## Sign in to Azure

Click on "Sign into Azure" to get a device code...

## Create a new Web Site

Click "+" to create a new website. You'll be prompted for:

* Subscription:
* Resource Group: a named collection of all our application's resources in Azure. For example, a Resource Group can contain a reference to a website, a database, and an Azure function.
* Location: where to store the resource group meta-data
* App Service Plan: Defines the physical resources that will be used to host our Website. In this example we will use a Basic (B1) plan... Later you can scale up your site...
* Node Runtime: The version of NOde to run your applications...
* Site Name:  give it a **unique name** as it will be referenced as http://**unique-name**.azurewebsites.net. In this example, we'll call it `myExpressApp-chrisdias`

## Run the Website

Finally, let's ensure the site is up and running.

You should see something like this:

![Empty Azure Website](nodejs-deployment_emptyazuresite.png)

----

<a class="tutorial-next-btn" href="/tutorials/nodejs-deployment/deploy-website">My site is running</a> <a class="tutorial-feedback-btn" onclick="reportIssue('node-deployment', 'create-website')" href="javascript:void(0)">I ran into an issue</a>