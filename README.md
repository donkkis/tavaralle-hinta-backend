## Tavaralle-hinta 

This is just a pet project I've been working on after "graduating" from the Full Stack MOOC. The idea is dead simple: If you're buying or selling a second hand phone, check out the feasible price range with my awesome app!

### Current deployment

View the live app at:

https://tory-screip-app.azurewebsites.net

Notice the app might become unavailable at any time, for any reason. I'm using mostly the free tier stuff at Azure, so there are limits in place.

### Tech stuff:

* Node.js backend
* React used for <a href="https://github.com/donkkis/tavaralle-hinta">frontend<a/>)
* A <a href="https://github.com/donkkis/tori-scraper">scraper script</a> in Azure Functions runs daily at midnight to retrieve new entries from tori.fi, which are persisted in MongoDB atlas. The scraper is originally forked from <a href="https://github.com/W4SD/tori-scraper">W4SD/tori-scraper</a>
* MaterialUI used for layout components
* Visualizations done with Victory: https://formidable.com/open-source/victory/
* Backend/Prod build of frontend combo is deployed to Azure App Service directly from VSCode using the corresponding plugin
