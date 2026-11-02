// GOAL - TO SEARCH THROUGH CAT BREEDS
async function getCatBreed(){
    try{
        // Get the search term from the search box
        // getting it first to compare to the data
        const search = document.getElementById("search").value;


        const url ="https://catfact.ninja/breeds"
        const response = await fetch(url)
        const json = await response.json();

        // loop through each cat object in the JSON data array, and print its breed, country, origin, coat, and pattern
        for (const breed of json.data) {
            console.log(breed.breed);
            // console.log(breed.country);
            // console.log(breed.origin);
            // console.log(breed.coat);
            // console.log(breed.pattern);

            if(breed.breed.toLowerCase() === search.toLowerCase()){
                const catHolder = document.getElementById("catHolder");
                catHolder.textContent = "" 
                //catHolder.textContent = breed.breed+"\n"+breed.country+"\n"+breed.origin+"\n"+breed.coat+"\n"+breed.pattern;
                console.log(breed)
                            
                const wrapper = document.createElement("div")
                wrapper.classList.add('card')

                let title = document.createElement('h2')
                title.textContent = breed.breed
                // Create a CONTAINER div to hold the title and year.
                // Give the CONTAINER div the style of container
                const container = document.createElement("div")
                container.classList.add("container")
               
                // Add the CONTAINER to the CARD
                // Add all the elements to the movieHolder 
                container.append(title)
                wrapper.append(container)
                catHolder.append(wrapper);

                const country = document.createElement('p')
                country.textContent = 'Country: '+breed.country

                const origin = document.createElement('p')
                origin.textContent = 'Origin: '+breed.origin

                const coat = document.createElement('p')
                coat.textContent = 'Coat: '+breed.coat

                const pattern = document.createElement('p')
                pattern.textContent = 'Pattern :'+breed.pattern
                

                container.append(country)
                container.append(origin)
                container.append(coat)
                container.append(pattern)
            }

        }
    }

    catch (error) {
        console.log(error)
    }
}