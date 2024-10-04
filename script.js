// Implement a slideshow of random movie images on the homepage using JavaScript's setInterval function at an interval of 2000ms.

// Initially, display a predefined array of random movie images.
// Allow users to input their own image URL and specify the position (index) in the slideshow where they want to add it.
// Update the slideshow dynamically based on user input, inserting the new image at the specified position.
// Ensure smooth transitions between images and provide interactive controls (play/pause, next, previous) for navigation.
// Handle edge cases such as out-of-bounds positions and ensure the slideshow loops back to the beginning after displaying the last image.

const arrayOfImages = ['https://cdn.shopify.com/s/files/1/0057/3728/3618/files/scan_78cface5-e199-4a21-b714-4c1a6d2b20ca_500x749.jpg?v=1718312413',
    'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_500x749.jpg?v=1707491191',
    'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/jurassicpark.mpw_500x749.jpg?v=1713805481',
    'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_500x749.jpg?v=1709821984'
]


let slide = document.getElementById('slideimage')
let idx = 0
let intervalLoop;
let isPlaying = false

function slideshow(item){

    slide.innerHTML = ''

    let image = document.createElement('img')
    image.src = item

    slide.append(image)

}


document.getElementById('nxt').addEventListener('click',()=>{
    clearInterval(intervalLoop)
    document.getElementById('play').textContent = 'Play/Pause'
    isPlaying = false
    intervalLoop = null
    idx = (idx + 1) % arrayOfImages.length
    let item = arrayOfImages[idx]
    slideshow(item)

    
})


document.getElementById('prev').addEventListener('click',()=>{
    clearInterval(intervalLoop)
    document.getElementById('play').textContent = 'Play/Pause'
    isPlaying = false
    intervalLoop = null
    idx = (idx - 1 + arrayOfImages.length) % arrayOfImages.length
    let item = arrayOfImages[idx]
    slideshow(item)
})


document.getElementById('play').addEventListener('click',()=>{

    if (!isPlaying && !intervalLoop){
        
        intervalLoop = setInterval(()=>{
            idx = (idx + 1) % arrayOfImages.length
            slideshow(arrayOfImages[idx])
        },2000)

        isPlaying = true
        document.getElementById('play').textContent = 'Pause'
    }

    else{

        clearInterval(intervalLoop)
        intervalLoop = null
        isPlaying = false
        document.getElementById('play').textContent = 'Play'
    }
})


slideshow(arrayOfImages[0])

