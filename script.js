const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const PARTICLES = document.querySelectorAll('.particle')
PARTICLES.forEach(P => {
    P.setAttribute('style', `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
    `)
})

// EmojiBlast functionality
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.sparkle-button button');
    
    if (button) {
        const BOUNCE_DURATION = 600;
        let bounceTimeout;

        const activateBounce = () => {
            button.classList.add('is-pointer-active');
            clearTimeout(bounceTimeout);
        };

        const deactivateBounce = () => {
            clearTimeout(bounceTimeout);
            bounceTimeout = setTimeout(() => {
                button.classList.remove('is-pointer-active');
            }, BOUNCE_DURATION);
        };

        // Mirror hover sparkle animation on touch devices.
        button.addEventListener('pointerdown', activateBounce);
        button.addEventListener('pointerup', deactivateBounce);
        button.addEventListener('pointercancel', deactivateBounce);
        button.addEventListener('pointerleave', deactivateBounce);

        button.addEventListener('mousedown', function(e) {
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';
            setTimeout(function() {
                window.location.href = 'https://www.linkedin.com/in/anjapetrovic/';
            }, 300);
        });
    }
});

// Color Picker functionality
document.addEventListener('DOMContentLoaded', function() {
    const colorCircles = document.querySelectorAll('.color-circle');
    const button = document.querySelector('.sparkle-button button');
    
    // Color configurations for each hue - matching CSS values
    const colorConfigs = {
        yellow: {
            primary: 45,
            secondary: 55,
            glow: 45,
            lightness: 50,
            background: 45
        },
        purple: {
            primary: 260,
            secondary: 270,
            glow: 260,
            lightness: 50,
            background: 260
        },
        blue: {
            primary: 220,
            secondary: 230,
            glow: 220,
            lightness: 50,
            background: 220
        },
        green: {
            primary: 120,
            secondary: 140,
            glow: 140,
            lightness: 40,
            background: 120
        },
        orange: {
            primary: 20,
            secondary: 25,
            glow: 20,
            lightness: 40,
            background: 20
        },
        red: {
            primary: 0,
            secondary: 10,
            glow: 0,
            lightness: 40,
            background: 0
        }
    };
    
    // Function to update button colors and background
    function updateButtonColors(colorName) {
        const config = colorConfigs[colorName];
        if (!config) return;
        
        // Update CSS custom properties for the button
        button.style.setProperty('--primary-hue', config.primary);
        button.style.setProperty('--secondary-hue', config.secondary);
        button.style.setProperty('--glow-hue', config.glow);
        button.style.setProperty('--lightness', config.lightness);
        
        // Update CSS custom properties for the background
        document.body.style.setProperty('--background-hue', config.background);
    }
    
    // Add click event listeners to each color circle
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const colorName = this.getAttribute('data-color');
            if (colorName && colorConfigs[colorName]) {
                updateButtonColors(colorName);
                
                // Add visual feedback to the clicked circle - matching button motion
                this.style.scale = '0.95';
                setTimeout(() => {
                    this.style.scale = '';
                }, 150);
            }
        });
    });
    
    // Initialize with purple (default)
    updateButtonColors('purple');
});

