// Remote Storage

// Accessing Remote Data
// Sending Data:
// The client can SEND DATA to the server, usually via POST request 

/* 
const data = {title:'First Post',content:'Hello, Server!'};
fetch('/articles', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
});
 */

// This allows:
//  - Specialized requests, such as FILTERING collections
//  - PERMANENT storage and SHARING of content


// Request Options
// Provide an options object to Fetch API to send data:
//  - method – can be POST, PUT, PATCH or DELETE 
//      - PUT(изпраща се целият обект наново, напр, {name, age, town}), коригиране на целият ресурс
//      - PATCH(изпраща се само property-то което искаме да променим{name: '....'}), коригиране на определен ресурс
//      - default на fetch поведение е GET
//  - body – contains the DATA to be sent, usually as JSON string
//      - POST,PUT, PATCH трябва да имат body
//  - headers – common headers include:
//      - Content-Type specifies the format of the data (manual)
//      - Content-Length specifies the size of the data (automatic)
//      - Cookie can be used with authentication (automatic)
//      - Custom authorization headers (manual)

// <-------------------------------------------------------------------------->

// Database Principles  -  Relational and Non-Relational Databases

// Backend As a Service:
//  - Solutions that provide pre-built, cloud hosted components for developing application backends
//  - Reduce the time and complexity required 
//  - Allow developers to focus on core features instead of low-level tasks
//  - Types:
//   - Cloud BaaS
//   - Open-source BaaS

// Relational Databases:
//  - Represent and store DATA in tables and rows
//  - Use Structured Querying Language (SQL)
//  - Allows you to LINK information from different tables through the use of FOREIGN KEYS (or indexes)
//  - Microsoft SQL Server, Oracle Database, MySQL

// Non-Relational Databases
// No-SQL databases
// More flexibility and adaptability
// Allow us to store unstructured data in a single document (not a good idea)
// Additional processing effort and more storage as the document sizes grow
// - MongoDB


//      Relational                                                  VS                                  Non-Relational Pros
// Work with structured data                                                                         They scale out horizontally 
// They support ACID transactional consistency and support "joins"                          Work with unstructured and semi-structured data
// Built-in data integrity and a large eco-system                                               Schema-free or Schema-on-read options
// Relationships in this system have constraints                                                            High availability
// Limitless indexing                                                                           Many are open source and so "free"


// Working with NoSQL Collections:
// Records in a database have unique identification keys
//  - New records are usually assigned and Id automatically
//  - This allows a record to be retrieved directly
//  - Keys can be used to create a relationship between records
// It's best to impose a structure on all records
//  - Every entry has the same properties
// De-normalize data
//  - E.g., article comments can be stored inside the article
// - Позвалявани да съхраняваме дани според нашите нужди