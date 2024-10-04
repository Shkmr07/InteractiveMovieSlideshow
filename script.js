// Implement a slideshow of random movie images on the homepage using JavaScript's setInterval function at an interval of 2000ms.

// Initially, display a predefined array of random movie images.
// Allow users to input their own image URL and specify the position (index) in the slideshow where they want to add it.
// Update the slideshow dynamically based on user input, inserting the new image at the specified position.
// Ensure smooth transitions between images and provide interactive controls (play/pause, next, previous) for navigation.
// Handle edge cases such as out-of-bounds positions and ensure the slideshow loops back to the beginning after displaying the last image.

const arrayOfImages = ['https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1706694442016-bd539e1d102b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1709884732294-90379fee354c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
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
    intervalLoop = null
    idx = (idx + 1) % arrayOfImages.length
    let item = arrayOfImages[idx]
    slideshow(item)
    
})


document.getElementById('prev').addEventListener('click',()=>{
    clearInterval(intervalLoop)
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

