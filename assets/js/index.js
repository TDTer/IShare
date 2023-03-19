function toggleVideos() {
    const videos = document.getElementById('section2');
    const posts = document.getElementById('section1');
    const community = document.getElementById('section3');
    
    videos.style.display = 'block';
    posts.style.display = 'none';
    community.style.display = 'none';
    }

function togglePosts() {
    const videos = document.getElementById('section2');
    const posts = document.getElementById('section1');
    const community = document.getElementById('section3');
    
    videos.style.display = 'none';
    posts.style.display = 'block';
    community.style.display = 'none';
}

function toggleCommunity() {
    const videos = document.getElementById('section2');
    const posts = document.getElementById('section1');
    const community = document.getElementById('section3');
    
    videos.style.display = 'none';
    posts.style.display = 'none';
    community.style.display = 'block';
}

