# **MongoDB Commands**

```bash
    show dbs
```

To Show all the databases

```bash '
    use db-name
```

To Switch to an existing database or create a new one.

```Bash
    db.dropDatabase()
```

To Drop/Delete the currently used database

```bash
    db.createCollection("users")
```
To Create a new Collection named user in the currently used database.

```bash
    db.<collection_name>.drop()
```
To Delete a from the currently used database.


### **Read Queries**

```bash
    db.<collection_name>.find()
```

To Find all the document from a collection.

```bash
    db.<collection_name>.findOne({querykey : queryvalue})
```

To Find all the document from a collection.


### **Create/Insert Queries**

```bash
    db.<collection_name>.insertOne({})
```

To Insert a single document in a collection.

```bash
    db.<collection_name>.insertMany([{} , {}])
```

To Insert a Multiples documents at once in a collection.

### **Update Queries**

```bash
    db.<collection_name>.updateOne({} , {})
```


To Insert a Multiples documents at once in a collection.

```bash
    db.<collection_name>.updateMany({} , {})
```

To Insert a Multiples documents at once in a collection.

### **DELETE Queries**


```bash
    db.<collection_name>.deleteOne({querykey : queryvalue})
```

To delete a document from a collection.

```bash
    db.<collection_name>.deleteMany({querykey : queryvalue})
```

To delete Multiples documents at once from a collection.

```bash
    db.<collection_name>.deleteMany({})
```

To delete all the documents from a collection.





