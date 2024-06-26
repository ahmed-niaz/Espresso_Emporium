const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.userDB}:${process.env.secretKey}@cluster0.2evw8as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeeCollection = client.db("coffeeDB").collection("coffee");
    const userCollection = client.db("coffeeDB").collection("user");

    // Get all the coffee or read all the coffee form database
    app.get("/coffee", async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // find specific coffee
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });
    // add/create Coffee
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      // add latestCoffee in the database
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });
    // update Coffee
    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const options = { upsert: true };
      const filter = { _id: new ObjectId(id) };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          details: updatedCoffee.details,
          photoURL: updatedCoffee.photoURL,
          category: updatedCoffee.category,
          coffee: updatedCoffee.coffee,
          quantity: updatedCoffee.quantity,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
        },
      };
      const result = await coffeeCollection.updateOne(filter, coffee, options);
      res.send(result);
    });
    // delete coffee
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    // user related API 's
   
    // create user's in the server side
    app.post(`/user`, async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

     // find all the users
     app.get(`/user`,async(req,res)=>{
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.send(users)
    })

    // update user Login INFO
    app.patch(`/user`,async(req,res)=>{
      // get data from the client
      const user = req.body;
      const options = {upsert: true}
      const filter = {
        email: user.email,
      }
      const updateDoc = {
        $set: {
          lastLoggedAt: user.lastLoggedAt,
        }
      }

      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })
    // delete user
    app.delete('/user/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Espresso_Emporium");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
