# QuasarStreaming

### API
I've created a Lambda function in AWS to simulate the API that my application will use to request movie information.

The URL is: https://nxvgg8i9w3.execute-api.us-east-2.amazonaws.com/functionQuasarStreaming

By using the GET method, my application retrieves all the movie data.

## Home (Principal Component)
I've created a screen called "Home" because it's the main screen of my streaming service app. It renders the other components and uses hooks that help the app function properly.

### Cover
The "Cover" is a component used to display the trending movie. Although it is currently used only once, it has the potential to be transformed into a dynamic component to showcase one or more trending movies.

### Carousel
I've created a component called "Carousel." As its name suggests, it allows the application to scroll through movies within the same category. It uses a subcomponent called "Card," which I reused by dynamically setting its size based on the values provided in the JSON data. Additionally, I created a middle component called "Animated" to progressively display the movie's image.