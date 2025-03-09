// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// YouTube video autoplay on scroll
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeVideo', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    window.addEventListener('scroll', () => {
        const videoElement = document.querySelector('.video-container');
        const rect = videoElement.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.top <= window.innerHeight);
        
        if (isVisible && player && typeof player.playVideo === 'function') {
            player.playVideo();
        } else if (player && typeof player.pauseVideo === 'function') {
            player.pauseVideo();
        }
    });
}

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Remove loading overlay after animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.addEventListener('animationend', () => {
                overlay.remove();
            });
        }
    }, 2000);
});