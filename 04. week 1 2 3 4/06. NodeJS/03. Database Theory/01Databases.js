//1. We need data to be stored in a way that is easy to store,access and modify. And it must be stored permanently, that's why we use databases.
//2. No DB is good or bad, we choose between sql and nosql based on our rqmts.
//3. DB is all about CRUD operations.
//4. It's DB which defines us that we are goood or bad backend developer.
//5. NO-SQL means Not Only SQL ie it is beyond SQL.
//6. SQL is a relational database management system (RDBMS) that stores data in a tabular format.
//7. No-SQL is a non-relational database management system (NRDBMS) that stores data in a non-tabular format.
//8. SQL is a structured query language that is used to manage relational databases.
//9. No-SQL is a non-structured query language that is used to manage non-relational databases.
//10. SQL is a declarative language that is used to manage relational databases.
//11. No-SQL is a non-declarative language that is used to manage non-relational databases.

//12. There are other DB's too.
//Once the data from frontend or the application is processed in server(nodejs) , the data is sent to the database & we can access the data from the database whenever we want.
// Never directly throw the data from the frontend to the backend, always use a middleware to process the data. Generally we use express middleware to process the data which is nothing but nodejs.
// Most easy DB is MongoDB which is a No-SQL DB.
// SQL or Postgres requires some pre reqsite knowledge before using it.
// While Mongo do not require any pre reqsite knowledge as we will be dealing with objects only. Which we have already learned in JS.
// We can't directly talk with mongo there is a layer between mongo and us which is called ORM(Object Relational Mapping). One of the most popular ORM is Mongoose. Others are Prisma, drizzle, typeorm, etc.
// ORM (Object-Relational Mapping) is a programming technique used to interact with a database using the object-oriented paradigm. Instead of writing raw SQL queries, developers use ORM libraries to interact with the database using the programming language's objects.

//ORM makes it easy to interact with the database using the object-oriented paradigm.


//Summary Of Flow: Frontend <-> Middleware ie server(nodejs) <-> ORM(Mongoose) <-> Database(MongoDB)  

//We wil be using online version of MongoDB called Atlas.


