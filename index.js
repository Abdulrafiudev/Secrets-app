import express from "express"
import axios from "axios"

let app = express()
let port = 3000


app.use(express.static(`public`))

app.get("/", async (req, res) => {

  try{
    let response = await axios.get(`https://secrets-api.appbrewery.com/random`)
    let result = response.data
    console.log(result)
    let secret = result.secret
    let user = result.username
    res.render(`index.ejs`, {secret, user})
  }

  catch(error){
    console.error(`Failed to make request`, error.message)
    res.render(`index.ejs`, {secret: `Error from server`, user:`Error from server`})
  }
  

})


app.listen(port, () => {
  console.log(`Server is active at port ${port}`)
})






















// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
